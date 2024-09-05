import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import chatService from '../Services/ChatService'; // Assuming you have a service for chat functionality

const ChatList = () => {
  const { roomName } = useParams(); // Get room name from URL
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages for the current room when component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messageData = await chatService.getMessages(roomName);
        setMessages(messageData);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [roomName]);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    try {
      const message = await chatService.sendMessage({
        text: newMessage,
        room: roomName,
      });
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage(''); // Clear input field after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Chat Room: {roomName}
      </Typography>
      <Card>
        <CardContent>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemText primary={message.user} secondary={message.text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        multiline
        rows={2}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default ChatList;
