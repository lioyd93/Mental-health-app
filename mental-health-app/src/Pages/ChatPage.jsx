import React from 'react';
import Chat from '../Components/Chat';
import { Container, Typography } from '@mui/material';

const ChatPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Chat Room
      </Typography>
      <Chat />
    </Container>
  );
};

export default ChatPage;