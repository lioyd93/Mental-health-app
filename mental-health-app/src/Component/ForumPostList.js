import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import forumService from '../Services/ForumService'; // Assuming you have a service for fetching forum posts

const ForumPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await forumService.getPosts(); // Fetch forum posts
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Forum Posts
      </Typography>
      <Grid container spacing={4}>
        {loading ? (
          <Typography variant="body2" color="text.secondary">Loading posts...</Typography>
        ) : (
          posts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.user}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(post.created_at).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
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




export default ForumPostList;
