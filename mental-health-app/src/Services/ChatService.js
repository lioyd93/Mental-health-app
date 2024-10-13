// Updated ChatService.js

// Assigning object to a variable before exporting to follow ESLint rules
const chatService = {
  getMessages: async (roomName) => {
    const response = await fetch(`/api/chat-messages/${encodeURIComponent(roomName)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }
    return response.json();  // Ensure the response is JSON
  },
};

export default chatService;
