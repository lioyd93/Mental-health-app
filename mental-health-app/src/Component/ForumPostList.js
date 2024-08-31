import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import forumService from '../Services/ForumService';


const ForumPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await forumService.getPosts();
        setPosts(fetchedPosts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <div className="forum-post-list">
        <h2>Forum Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="forum-post">
            <Typography variant="body1"><strong>{post.user}</strong>: {post.content}</Typography>
            <Typography variant="caption">{new Date(post.created_at).toLocaleString()}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ForumPostList;
