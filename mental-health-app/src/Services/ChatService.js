class ChatService {
    // Simulated chat messages data (for demonstration purposes)
    messages = [
      { id: 1, userId: 1, text: 'Hello, how are you feeling today?', timestamp: new Date('2024-02-12T10:00:00') },
      { id: 2, userId: 2, text: 'Im doing okay, thanks for asking.', timestamp: new Date('2024-02-12T10:05:00') },
      // Add more messages as needed
    ];
  
    // Function to fetch chat messages
    getMessages = () => {
      // Simulate fetching chat messages from a database or API
      return this.messages;
    };
  
    // Function to send a chat message
    sendMessage = (userId, text) => {
      // Simulate sending a chat message and adding it to the messages array
      const newMessage = {
        id: this.messages.length + 1,
        userId,
        text,
        timestamp: new Date(),
      };
      this.messages.push(newMessage);
      return newMessage;
    };
  }
  
  const chatServiceInstance = new ChatService();
  export default chatServiceInstance;