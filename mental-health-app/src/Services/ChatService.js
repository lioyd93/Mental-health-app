// ChatService.js
import axios from 'axios';

class ChatService {
  API_URL = 'http://127.0.0.1:8000/api/chat-messages/';  // Adjust the URL as needed

  getChatMessages = async () => {
    try {
      const response = await axios.get(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      return [];
    }
  };
}

const chatServiceInstance = new ChatService();
export default chatServiceInstance;
