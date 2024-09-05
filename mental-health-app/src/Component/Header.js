import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = React.memo(({ selectedRoom, onRoomChange }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for handling the chat room dropdown menu

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/signin');
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
          <Button color="inherit" component={Link} to="/Pages/RoomsPage">ChatRooms</Button> 
          <Button color="inherit" component={Link} to="/Pages/EventsPage">Events</Button>
          <Button color="inherit" component={Link} to="/Pages/ForumCategoriesPage">Forum</Button>
          <Button color="inherit" component={Link} to="/Pages/WorkshopsPage">Workshops</Button>
          <Button color="inherit" component={Link} to="/Pages/ResourcesPage">Resources</Button>

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
});

export default Header;
