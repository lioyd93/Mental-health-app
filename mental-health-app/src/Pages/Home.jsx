import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Mental Health Support Network
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Providing supportive community and valuable resources for students facing challenges like stress, depression, and anxiety.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Get Support
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Explore Resources
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
