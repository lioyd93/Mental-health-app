// Footer.js
import React from 'react';
import { Container, Typography,Link } from '@mui/material';


const Footer = () => {
  return (<Container>
    <Typography variant="body2" color="text.secondary" align="center">
      {'© '}
      <Link color="inherit" href="#">
        Mental Health Support Network
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
};

export default Footer;
