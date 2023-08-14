import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'; // Cambia la URL a la de tu servidor json-server
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = {
  getAllFavorites: async () => {
    try {
      const response = await axios.get('/favorites');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createFavorite: async (favoriteData) => {
    try {
      const response = await axios.post('/favorites', favoriteData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateFavorite: async (favoriteId, favoriteData) => {
    try {
      const response = await axios.put(`/favorites/${favoriteId}`, favoriteData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteFavorite: async (favoriteId) => {
    try {
      const response = await axios.delete(`/favorites/${favoriteId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
