import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import chatService from '../Services/ChatService'; 

const ChatList = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('General');
  const [loading, setLoading] = useState(true);

  // Function to generate a random anonymous user identifier
  const generateAnonymousUser = () => `User${Math.floor(Math.random() * 1000)}`;

  // Fetch messages based on the selected room
  const fetchMessages = async (room) => {
    try {
      const data = await chatService.getMessages(room); // Fetch messages for the selected room
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages(selectedRoom); // Fetch messages when the room changes or component mounts
  }, [selectedRoom]);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    try {
      const anonymousUser = generateAnonymousUser(); // Generate an anonymous user identifier
      const message = await chatService.sendMessage({
        user: anonymousUser,
        text: newMessage,
        room: selectedRoom, // Include the selected room
      }); // Send the new message
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Handle reporting a message
  const handleReportMessage = async (messageId) => {
    try {
      await chatService.reportMessage(messageId); // Report the message
      alert('Message reported successfully');
    } catch (error) {
      console.error('Error reporting message:', error);
    }
  };

  // Handle room selection
  const handleRoomChange = (room) => {
    setSelectedRoom(room);
    setLoading(true);
    fetchMessages(room); // Fetch messages for the newly selected room
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Chat Room: {selectedRoom}
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
                      <Button variant="outlined" color="secondary" onClick={() => handleReportMessage(message.id)}>
                        Report
                      </Button>
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

          {/* Room Selection */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Select Room
              </Typography>
              <Button variant="outlined" onClick={() => handleRoomChange('Stress Support')}>Stress Support</Button>
              <Button variant="outlined" onClick={() => handleRoomChange('Depression Help')}>Depression Help</Button>
              <Button variant="outlined" onClick={() => handleRoomChange('Anxiety Relief')}>Anxiety Relief</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatList;
