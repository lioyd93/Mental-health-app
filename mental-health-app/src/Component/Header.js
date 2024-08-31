// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button,Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mental Health Support Network
        </Typography>
        <Button color="inherit" component={Link} to="/Pages/Home">Home</Button>
        <Button color="inherit" component={Link} to="/Pages/About">About</Button>
        <Button color="inherit" component={Link} to="/Pages/ChatPage">Chat</Button>
        <Button color="inherit" component={Link} to="/Pages/EventsPage">Events</Button>
        <Button color="inherit" component={Link} to="/Pages/ForumCategoriesPage">Forum</Button>
        <Button color="inherit" component={Link} to="/Pages/WorkshopsPage">Work shops</Button>
        <Button color="inherit" component={Link} to="/Pages/ResourcesPage">Resources</Button>
      </Toolbar>
    </AppBar>
    </Container>
  );
};

export default Header;
