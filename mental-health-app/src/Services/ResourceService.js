// ResourceService.js
import axios from 'axios';

class ResourceService {
  API_URL = 'http://127.0.0.1:8000/api/resources/';  // Adjust the URL as needed

  getResources = async () => {
    try {
      const response = await axios.get(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching resources:', error);
      return [];
    }
  };
}

const resourceServiceInstance = new ResourceService();
export default resourceServiceInstance;
