import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage to determine if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token on logout
    setIsLoggedIn(false); // Set login state to false
    navigate('/signin'); // Redirect to sign-in page
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
          {/* Conditionally render Sign In and Sign Up buttons */}
          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={() => handleNavigation('/signin')}>Sign In</Button>
              <Button color="inherit" onClick={() => handleNavigation('/signup')}>Sign Up</Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
