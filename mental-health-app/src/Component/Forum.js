import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import forumService from '../Services/ForumService'; // Assuming you have a service for fetching forum categories

const ForumCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await forumService.getCategories(); // Fetch forum categories
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Forum Categories
      </Typography>
      <Grid container spacing={4}>
        {loading ? (
          <Typography variant="body2" color="text.secondary">Loading categories...</Typography>
        ) : (
          categories.map((category) => (
            <Grid item xs={12} md={6} lg={4} key={category.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {category.name}
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




export default ForumCategoryList;
