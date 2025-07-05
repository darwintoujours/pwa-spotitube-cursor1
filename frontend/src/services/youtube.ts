import axios from 'axios';

const LAMBDA_BACKEND_URL = process.env.REACT_APP_LAMBDA_BACKEND_URL || 'https://your-lambda-api-gateway-url.execute-api.eu-west-3.amazonaws.com/dev';

// YouTube API service via AWS Lambda
export const youtubeService = {
  // Search YouTube videos
  async searchVideos(query: string, type: string = 'video', maxResults: number = 10) {
    try {
      const response = await axios.get(`${LAMBDA_BACKEND_URL}/youtube/search`, {
        params: { q: query, type, maxResults }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching YouTube:', error);
      throw error;
    }
  },

  // Get audio stream URL
  async getAudioStream(videoId: string) {
    try {
      const response = await axios.get(`${LAMBDA_BACKEND_URL}/youtube/stream/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting audio stream:', error);
      throw error;
    }
  },

  // Extract and download audio
  async extractAudio(videoId: string, format: string = 'opus', quality: string = '192') {
    try {
      const response = await axios.post(`${LAMBDA_BACKEND_URL}/youtube/extract/${videoId}`, {
        format,
        quality
      });
      return response.data;
    } catch (error) {
      console.error('Error extracting audio:', error);
      throw error;
    }
  },

  // Match Spotify track to YouTube video
  async matchSpotifyToYouTube(spotifyTrack: any) {
    try {
      // This would be implemented in the Lambda backend
      // For now, we'll search using track name and artist
      const query = `${spotifyTrack.name} ${spotifyTrack.artists[0].name} audio`;
      const searchResults = await this.searchVideos(query, 'video', 5);
      
      if (searchResults.results && searchResults.results.length > 0) {
        return searchResults.results[0];
      }
      
      return null;
    } catch (error) {
      console.error('Error matching Spotify to YouTube:', error);
      return null;
    }
  }
}; 