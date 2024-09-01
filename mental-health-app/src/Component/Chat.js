import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import chatService from '../Services/ChatService'; // Assuming you have a service for fetching chat messages

const ChatList = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await chatService.getMessages(); // Fetch chat messages
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    try {
      const message = await chatService.sendMessage(newMessage); // Send a new message
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Chat Room
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '60vh', overflowY: 'auto' }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Messages
              </Typography>
              {loading ? (
                <Typography variant="body2" color="text.secondary">Loading messages...</Typography>
              ) : (
                <List>
                  {messages.map((message, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={message.user} secondary={message.text} />
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Send a Message
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                label="Your Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSendMessage}>
                Send
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};



export default ChatList;
