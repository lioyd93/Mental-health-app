import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

// Placeholder for simulated fetch function to get events data
const fetchEvents = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "Mindfulness for Stress Relief",
      date: "2024-04-10",
      description: "Learn techniques to manage stress effectively through mindfulness.",
      imageUrl: "/images/event-mindfulness.jpg",
    },
    {
      id: 2,
      title: "Coping with Anxiety",
      date: "2024-05-15",
      description: "Strategies and support for dealing with anxiety.",
      imageUrl: "/images/event-anxiety.jpg",
    },
    // Add more events as needed
  ]);
};

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
    });
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={4}>
        {events.map(event => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography color="textSecondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsPage;
