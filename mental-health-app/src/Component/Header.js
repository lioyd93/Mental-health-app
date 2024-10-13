import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

<<<<<<< HEAD
function handleLogout() {
  // Remove authentication data on logout
  localStorage.removeItem('authToken'); // Remove the stored token
  localStorage.setItem('isAuthenticated', false); // Update authentication status

  // Optionally, redirect the user to the home page or sign-in page after logout
  window.location.href = '/';
}

const Header = () => {
=======
const Header = React.memo(({ selectedRoom, onRoomChange }) => {
>>>>>>> 52d6317a569dc4825876e62738bc2fcb484fbd98
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

<<<<<<< HEAD
  // Check authentication status from localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
=======
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/signin');
  };

 
>>>>>>> 52d6317a569dc4825876e62738bc2fcb484fbd98

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mental Health Support Network
          </Typography>
          <Button color="inherit" component={Link} to="/Pages/Home">Home</Button>
          <Button color="inherit" component={Link} to="/Pages/About">About</Button>
<<<<<<< HEAD
          {isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/Pages/ChatPage">Chat</Button>
              <Button color="inherit" component={Link} to="/Pages/EventsPage">Events</Button>
              <Button color="inherit" component={Link} to="/Pages/ForumCategoriesPage">Forum</Button>
              <Button color="inherit" component={Link} to="/Pages/WorkshopsPage">Workshops</Button>
              <Button color="inherit" component={Link} to="/Pages/ResourcesPage">Resources</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
=======
          <Button color="inherit" component={Link} to="/Pages/RoomsPage">ChatRooms</Button> 
          <Button color="inherit" component={Link} to="/Pages/EventsPage">Events</Button>
          <Button color="inherit" component={Link} to="/Pages/ForumCategoriesPage">Forum</Button>
          <Button color="inherit" component={Link} to="/Pages/WorkshopsPage">Workshops</Button>
          <Button color="inherit" component={Link} to="/Pages/ResourcesPage">Resources</Button>

          {!isLoggedIn ? (
>>>>>>> 52d6317a569dc4825876e62738bc2fcb484fbd98
            <>
              <Button color="inherit" onClick={() => handleNavigation('/signin')}>Sign In</Button>
              <Button color="inherit" onClick={() => handleNavigation('/signup')}>Sign Up</Button>
            </>
<<<<<<< HEAD
=======
          ) : (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
>>>>>>> 52d6317a569dc4825876e62738bc2fcb484fbd98
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
});

export default Header;
