import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import forumService from '../Services/ForumService';

const ForumCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await forumService.getCategories();
        setCategories(fetchedCategories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <div className="forum-category-list">
        <h2>Forum Categories</h2>
        {categories.map(category => (
          <div key={category.id} className="forum-category">
            <Typography variant="h6">{category.name}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ForumCategoryList;
