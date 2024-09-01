import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, CardActions, Button } from '@mui/material';
import resourceService from '../Services/ResourceService'; // Assuming you have a service for fetching resources

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await resourceService.getResources(); // Fetch resources
        setResources(data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Resources
      </Typography>
      <Grid container spacing={4}>
        {loading ? (
          <Typography variant="body2" color="text.secondary">Loading resources...</Typography>
        ) : (
          resources.map((resource) => (
            <Grid item xs={12} md={6} lg={4} key={resource.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {resource.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={resource.link} target="_blank">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};




export default ResourceList;
