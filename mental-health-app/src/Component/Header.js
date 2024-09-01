import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

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
          <Button color="inherit" component={Link} to="/Pages/WorkshopsPage">Workshops</Button>
          <Button color="inherit" component={Link} to="/Pages/ResourcesPage">Resources</Button>
          <Button color="inherit" onClick={() => handleNavigation('/signin')}>Sign In</Button>
          <Button color="inherit" onClick={() => handleNavigation('/signup')}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
