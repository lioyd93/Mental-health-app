import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import workshopService from '../Services/WorkshopService'; // Assuming you have a service for fetching workshops

const WorkshopList = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await workshopService.getWorkshops(); // Fetch workshops
        setWorkshops(data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Upcoming Workshops
      </Typography>
      <Grid container spacing={4}>
        {loading ? (
          <Typography variant="body2" color="text.secondary">Loading workshops...</Typography>
        ) : (
          workshops.map((workshop) => (
            <Grid item xs={12} md={6} lg={4} key={workshop.id}>
              <Card>
          
                <CardContent>
                  <Typography variant="h5" component="div">
                    {workshop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(workshop.date).toLocaleDateString()} - {workshop.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {workshop.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};




export default WorkshopList;
