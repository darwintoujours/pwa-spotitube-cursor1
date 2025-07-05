import { useState, useEffect, useCallback } from 'react';
import { spotifyService } from '../services/spotify';

interface User {
  id: string;
  display_name: string;
  email: string;
  images: Array<{ url: string }>;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: true,
    error: null
  });

  // Check for existing tokens on mount
  useEffect(() => {
    const checkExistingAuth = async () => {
      try {
        const jwtToken = localStorage.getItem('jwt_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (jwtToken) {
          // Validate existing JWT token
          const validation = await spotifyService.validateToken(jwtToken);
          if (validation.valid) {
            const user = await spotifyService.getUserProfile(validation.access_token);
            setAuthState({
              isAuthenticated: true,
              user,
              accessToken: validation.access_token,
              refreshToken,
              loading: false,
              error: null
            });
            return;
          }
        }

        // Check for callback parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const codeVerifier = localStorage.getItem('code_verifier');

        if (code && codeVerifier) {
          // Handle OAuth callback
          const tokens = await spotifyService.handleCallback(code, codeVerifier);
          
          localStorage.setItem('jwt_token', tokens.jwt_token);
          if (tokens.refresh_token) {
            localStorage.setItem('refresh_token', tokens.refresh_token);
          }

          const validation = await spotifyService.validateToken(tokens.jwt_token);
          const user = await spotifyService.getUserProfile(validation.access_token);

          setAuthState({
            isAuthenticated: true,
            user,
            accessToken: validation.access_token,
            refreshToken: tokens.refresh_token,
            loading: false,
            error: null
          });

          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }

        // No valid authentication found
        setAuthState(prev => ({ ...prev, loading: false }));
      } catch (error) {
        console.error('Auth check error:', error);
        setAuthState({
          isAuthenticated: false,
          user: null,
          accessToken: null,
          refreshToken: null,
          loading: false,
          error: 'Authentication failed'
        });
      }
    };

    checkExistingAuth();
  }, []);

  // Initiate OAuth flow
  const login = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      const authData = await spotifyService.initiateAuth();
      
      // Store code verifier for callback
      localStorage.setItem('code_verifier', authData.code_verifier);
      
      // Redirect to Spotify
      window.location.href = authData.auth_url;
    } catch (error) {
      console.error('Login error:', error);
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to initiate login'
      }));
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('code_verifier');
    
    setAuthState({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
      error: null
    });
  }, []);

  // Refresh token
  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const tokens = await spotifyService.refreshToken(refreshToken);
      
      localStorage.setItem('jwt_token', tokens.jwt_token);
      if (tokens.refresh_token) {
        localStorage.setItem('refresh_token', tokens.refresh_token);
      }

      const validation = await spotifyService.validateToken(tokens.jwt_token);
      
      setAuthState(prev => ({
        ...prev,
        accessToken: validation.access_token,
        refreshToken: tokens.refresh_token
      }));

      return validation.access_token;
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
      throw error;
    }
  }, [logout]);

  return {
    ...authState,
    login,
    logout,
    refreshAccessToken
  };
}; 