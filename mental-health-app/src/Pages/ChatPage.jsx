import React, { useState,  } from 'react';
import { Container, Typography } from '@mui/material';


const ChatPage = () => {
  // State to store chat messages
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const sendMessage = (message) => {
    setMessages([...messages, { text: message, timestamp: new Date() }]);
  };

  // Function to format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <Container>
    <div className="chat-page">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className="message">
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              sendMessage(e.target.value.trim());
              e.target.value = '';
            }
          }}
        />
      </footer>
    </div>
    </Container>
  );
};

export default ChatPage;
