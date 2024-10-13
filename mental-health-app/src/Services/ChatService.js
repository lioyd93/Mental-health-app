const getMessages = async (roomName) => {
  const response = await fetch(`/api/chat-messages/${encodeURIComponent(roomName)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  return response.json();  // Ensure the response is JSON
};

export default {
  getMessages,
};