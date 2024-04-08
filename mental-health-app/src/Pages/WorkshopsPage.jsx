import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, TextField, MenuItem } from '@mui/material';

// Placeholder for simulated fetch function to get workshops data
const fetchWorkshops = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "Mindfulness Meditation",
      date: "2024-04-20",
      description: "A workshop on mindfulness meditation techniques for stress relief.",
      topic: "Stress Relief",
    },
    {
      id: 2,
      title: "Effective Study Habits",
      date: "2024-05-05",
      description: "Learn effective study habits to enhance learning and reduce anxiety.",
      topic: "Learning",
    },
    // Add more workshops as needed
  ]);
};

const filterOptions = ["All", "Stress Relief", "Learning"];

const WorkshopsPage = () => {
  const [workshops, setWorkshops] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchWorkshops().then(data => {
      setWorkshops(data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredWorkshops = workshops.filter(workshop => filter === 'All' || workshop.topic === filter);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Workshops
      </Typography>
      <TextField
        select
        label="Filter by Topic"
        value={filter}
        onChange={handleFilterChange}
        helperText="Select a topic to filter workshops"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        {filterOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Grid container spacing={4}>
        {filteredWorkshops.map(workshop => (
          <Grid item xs={12} sm={6} md={4} key={workshop.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {workshop.title}
                </Typography>
                <Typography color="textSecondary">
                  {workshop.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {workshop.description}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary">
                    Register
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

export default WorkshopsPage;
