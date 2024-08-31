import axios from 'axios';

class EventService {
   
  API_URL = 'http://127.0.0.1:8000/api/events/';
    // Function to fetch events
    getEvents = async () => {
      try {
        const response = await axios.get(this.API_URL);
        return response.data;
      } catch (error) {
        console.error('Error fetching events:', error);
        return [];
      }
    };
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