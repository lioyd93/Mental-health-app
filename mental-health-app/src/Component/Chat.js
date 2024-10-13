import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography,  List, ListItem, ListItemText, TextField, Button, Paper } from '@mui/material';
import chatService from '../Services/ChatService'; // Assuming chatService handles message fetching and sending

const ChatPage = () => {
  const { roomName } = useParams(); // Get the room name from URL
  const [messages, setMessages] = useState([]); // List of all messages in the room
  const [newMessage, setNewMessage] = useState(''); // Current message input
  const socketRef = useRef(null); // WebSocket reference
  const messageEndRef = useRef(null); // To auto-scroll to the latest message

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
    socketRef.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${encodeURIComponent(roomName)}/`);

    socketRef.current.onopen = () => {
      console.log('WebSocket connected');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
      scrollToBottom(); // Scroll to the latest message when a new one arrives
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socketRef.current.close();
    };
  }, [roomName]);

  // Automatically scroll to the bottom when a new message is added
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    
    // Send message over WebSocket
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        message: newMessage,
      }));
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Chat Room: {roomName}
      </Typography>

      {/* Chat Window */}
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          height: '60vh',
          overflowY: 'auto',
          mb: 2,
          p: 2,
          backgroundColor: '#f0f2f5',
          borderRadius: '10px',
        }}
      >
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent: message.user === 'You' ? 'flex-end' : 'flex-start',
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  backgroundColor: message.user === 'You' ? '#e0f7fa' : '#ffffff',
                  borderRadius: '10px',
                  maxWidth: '80%',
                }}
              >
                <ListItemText
                  primary={message.user}
                  secondary={message.text}
                  sx={{
                    textAlign: message.user === 'You' ? 'right' : 'left',
                  }}
                />
              </Paper>
            </ListItem>
          ))}
          {/* Invisible div to scroll to the latest message */}
          <div ref={messageEndRef} />
        </List>
      </Paper>

      {/* Message Input */}
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        multiline
        rows={2}
        sx={{ mb: 2 }}
      />

      {/* Send Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        fullWidth
        sx={{ maxWidth: 600 }}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatPage;
