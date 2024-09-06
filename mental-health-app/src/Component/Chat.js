import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import chatService from '../Services/ChatService'; // Assuming you have a service for chat functionality

const ChatPage = () => {
  const { roomName } = useParams(); // Get the room name from URL
  const [messages, setMessages] = useState([]); // List of messages
  const [newMessage, setNewMessage] = useState(''); // Message input
  const socketRef = useRef(null); // WebSocket reference

  // Fetch messages for the current room when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messageData = await chatService.getMessages(roomName); // Initial fetch from service
        setMessages(messageData);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [roomName]);

  // Establish WebSocket connection
  useEffect(() => {
    socketRef.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    socketRef.current.onopen = () => {
      console.log('WebSocket connected');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socketRef.current.close();
    };
  }, [roomName]);

  // Handle sending new message
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    
    // Send message over WebSocket
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        message: newMessage,
      }));
      setNewMessage('');
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

export default ChatPage;
