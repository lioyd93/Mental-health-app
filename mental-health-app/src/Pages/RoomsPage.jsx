import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const navigate = useNavigate();

  // Static list of rooms
  const rooms = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Anxiety Room' },
    { id: 3, name: 'Stress Room' },
    { id: 4, name: 'Depression Room' }
  ];

  // Handle room click and navigate to the chat page for that room
  const handleRoomClick = (roomName) => {
    navigate(`/chat/${roomName}`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Available Chat Rooms
      </Typography>
      <Card>
        <CardContent>
          <List>
            {rooms.map((room) => (
              <ListItem button key={room.id} onClick={() => handleRoomClick(room.name)}>
                <ListItemText primary={room.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RoomsPage;
