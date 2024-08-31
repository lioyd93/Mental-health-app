import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Home = () => {
  // Placeholder content, ideally fetched or dynamically updated
  const features = [
    {
      title: 'Upcoming Events',
      description: 'Join our events and workshops to learn coping strategies and meet peers.',
      action: 'View Events',
      link: '/Pages/EventsPage',
    },
    {
      title: 'Forum Discussions',
      description: 'Engage in discussions and share your experiences with the community.',
      action: 'Visit Forum',
      link: '/Pages/ForumCategoriesPage',
    },
    {
      title: 'Resources',
      description: 'Access a wealth of resources to support your mental health journey.',
      action: 'Explore Resources',
      link: '/Pages/ResourcesPage',
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom align="center">
        Welcome to the Mental Health Support Network
      </Typography>
      <Typography variant="subtitle1" paragraph align="center">
        A safe space for students to find support, resources, and community.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {feature.description}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary" href={feature.link}>
                    {feature.action}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
