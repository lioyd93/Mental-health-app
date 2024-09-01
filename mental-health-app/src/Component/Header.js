import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Assume we have a function that checks if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('token'); // Adjust based on your auth logic

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token or session
    navigate('/signin'); // Redirect to sign-in after logout
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
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signin">Sign In</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
