import axios from 'axios';

class EventService {
  API_URL = 'http://127.0.0.1:8000/api/events/';  // Adjust the URL as needed

  // Fetch events from the backend API
  getEvents = async () => {
    try {
      const response = await axios.get(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  };

  // Function to get event by ID (can be implemented similarly)
  getEventById = async (id) => {
    try {
      const response = await axios.get(`${this.API_URL}${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event:', error);
      return null;
    }
  };
}

const eventServiceInstance = new EventService();
export default eventServiceInstance;
