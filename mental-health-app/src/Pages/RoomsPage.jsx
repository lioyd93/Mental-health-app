import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const navigate = useNavigate();

  // Define the static list of chat rooms
  const rooms = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Anxiety Room' },
    { id: 3, name: 'Stress Room' },
    { id: 4, name: 'Depression Room' }
  ];

  // Handle room click and navigate to the selected room
  const handleRoomClick = (roomName) => {
    navigate(`/chat/${roomName}`); // Navigate to the specific room's chat page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5', // Light background for contrast
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3,
          padding: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Available Chat Rooms
        </Typography>
        <Paper elevation={3}>
          <CardContent>
            <List>
              {rooms.map((room) => (
                <ListItem
                  button
                  key={room.id}
                  onClick={() => handleRoomClick(room.name)}
                  sx={{
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#f5f5f5', // Subtle hover effect
                    },
                    padding: 2,
                    marginBottom: 1,
                  }}
                >
                  <ListItemText
                    primary={room.name}
                    sx={{ textAlign: 'center', fontWeight: 'medium' }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Paper>
      </Card>
    </Box>
  );
};

export default RoomsPage;
