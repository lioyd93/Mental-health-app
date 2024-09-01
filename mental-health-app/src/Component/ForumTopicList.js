import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import forumService from '../Services/ForumService'; // Assuming you have a service for fetching forum topics

const ForumTopicList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await forumService.getTopics(); // Fetch forum topics
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Forum Topics
      </Typography>
      <Grid container spacing={4}>
        {loading ? (
          <Typography variant="body2" color="text.secondary">Loading topics...</Typography>
        ) : (
          topics.map((topic) => (
            <Grid item xs={12} md={6} lg={4} key={topic.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {topic.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(topic.created_at).toLocaleDateString()}
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



export default ForumTopicList;
