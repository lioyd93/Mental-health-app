import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import SendIcon from  '@mui/icons-material/Add';
// Placeholder for chat message format
const dummyMessages = [
  { sender: "Alice", message: "Hello, how are you feeling today?" },
  { sender: "Bob", message: "I'm a bit stressed with my exams coming up." },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');

  // This useEffect will be replaced with WebSocket connection setup
  useEffect(() => {
    // Placeholder for websocket initialization and message handling
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { sender: "You", message: newMessage }];
      setMessages(updatedMessages);
      setNewMessage('');
      // Here you would also send the message through the WebSocket
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Community Chat
      </Typography>
      <Paper style={{ maxHeight: 400, overflow: 'auto' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg.sender} secondary={msg.message} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatPage;
