// ChatList.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import chatService from '../Services/ChatService';

const ChatList = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const fetchedChatMessages = await chatService.getChatMessages();
        setChatMessages(fetchedChatMessages || []);
      } catch (error) {
        console.error('Error fetching chat messages:', error);
        setChatMessages([]);
      }
    };

    fetchChatMessages();
  }, []);

  return (
    <Container>
      <div className="chat-list">
        <h2>Chat Messages</h2>
        {chatMessages.map(chatMessage => (
          <div key={chatMessage.id} className="chat-message">
            <Typography variant="body1"><strong>{chatMessage.user}</strong>: {chatMessage.message}</Typography>
            <Typography variant="caption">{new Date(chatMessage.timestamp).toLocaleString()}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ChatList;
