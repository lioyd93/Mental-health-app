// ForumService.js
import axios from 'axios';

class ForumService {
  API_URL = 'http://127.0.0.1:8000/api/forum/';

  getCategories = async () => {
    try {
      const response = await axios.get(`${this.API_URL}categories/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  getTopics = async () => {
    try {
      const response = await axios.get(`${this.API_URL}topics/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching topics:', error);
      return [];
    }
  };

  getPosts = async () => {
    try {
      const response = await axios.get(`${this.API_URL}posts/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };
}

const forumServiceInstance = new ForumService();
export default forumServiceInstance;
