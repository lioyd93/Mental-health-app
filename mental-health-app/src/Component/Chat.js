import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const ChatPage = () => {
  // State to store chat messages
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to fetch chat messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/chat-messages/');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Function to send a message
  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:8000/api/chat-messages/', { text: newMessage });
      setNewMessage('');
      fetchMessages(); // Fetch updated messages after sending a new message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Function to format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    fetchMessages(); // Fetch initial messages when the component mounts
  }, []);

  return (
    <Container>
    <div className="chat-page">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <div className="message-container">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <div className="message-text">{message.text}</div>
              <div className="message-timestamp">{formatTimestamp(message.timestamp)}</div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newMessage.trim() !== '') {
              sendMessage();
            }
          }}
        />
      </footer>
    </div>
    </Container>
  );
};

export default ChatPage;
