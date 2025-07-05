import axios from 'axios';

const FLASK_BACKEND_URL = process.env.REACT_APP_FLASK_BACKEND_URL || 'http://localhost:5000';
const LAMBDA_BACKEND_URL = process.env.REACT_APP_LAMBDA_BACKEND_URL || 'https://your-lambda-api-gateway-url.execute-api.eu-west-3.amazonaws.com/dev';

// Spotify API service
export const spotifyService = {
  // Initiate OAuth PKCE flow
  async initiateAuth() {
    try {
      const response = await axios.get(`${FLASK_BACKEND_URL}/auth/spotify/login`);
      return response.data;
    } catch (error) {
      console.error('Error initiating Spotify auth:', error);
      throw error;
    }
  },

  // Handle OAuth callback
  async handleCallback(code: string, codeVerifier: string) {
    try {
      const response = await axios.get(`${FLASK_BACKEND_URL}/auth/spotify/callback`, {
        params: { code, code_verifier: codeVerifier }
      });
      return response.data;
    } catch (error) {
      console.error('Error handling Spotify callback:', error);
      throw error;
    }
  },

  // Refresh access token
  async refreshToken(refreshToken: string) {
    try {
      const response = await axios.post(`${FLASK_BACKEND_URL}/auth/spotify/refresh`, {
        refresh_token: refreshToken
      });
      return response.data;
    } catch (error) {
      console.error('Error refreshing Spotify token:', error);
      throw error;
    }
  },

  // Validate JWT token
  async validateToken(jwtToken: string) {
    try {
      const response = await axios.post(`${FLASK_BACKEND_URL}/auth/validate`, {
        jwt_token: jwtToken
      });
      return response.data;
    } catch (error) {
      console.error('Error validating token:', error);
      throw error;
    }
  },

  // Search Spotify
  async searchSpotify(accessToken: string, query: string, type: string = 'track,artist,album') {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search`, {
        params: { q: query, type },
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching Spotify:', error);
      throw error;
    }
  },

  // Get user profile
  async getUserProfile(accessToken: string) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  },

  // Get user playlists
  async getUserPlaylists(accessToken: string) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting user playlists:', error);
      throw error;
    }
  }
}; 