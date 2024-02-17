import React, { useState, useEffect } from 'react';
import chatService from './ChatService';

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch initial chat messages
    const initialMessages = chatService.getMessages();
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Send message and update state
      const message = chatService.sendMessage(userId, newMessage);
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">{message.timestamp.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
