// WorkshopService.js
import axios from 'axios';

class WorkshopService {
  API_URL = 'http://127.0.0.1:8000/api/workshops/';  // Adjust the URL as needed

  getWorkshops = async () => {
    try {
      const response = await axios.get(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching workshops:', error);
      return [];
    }
  };
}

const workshopServiceInstance = new WorkshopService();
export default workshopServiceInstance;
