import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from the backend
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms/');
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Available Chat Rooms
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          p: 2,
          backgroundColor: '#f0f2f5',
          borderRadius: '10px',
        }}
      >
        <List>
          {rooms.map((room) => (
            <ListItem key={room.id}>
              <ListItemText primary={room.name} />
              <Button
                component={Link}
                to={`/chat/${room.name}`}
                variant="contained"
                color="primary"
              >
                Join
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default RoomsPage;