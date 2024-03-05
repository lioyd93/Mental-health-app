import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import forumService from './ForumService';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch forum posts when the component mounts
    const fetchedPosts = forumService.getPosts();
    setPosts(fetchedPosts);
  }, []);

  return (
    <Container>
    <div className="forum">
      <h2>Forum</h2>
      {posts.map(post => (
        <div key={post.id} className="forum-post">
          <div className="post-title">{post.title}</div>
          <div className="post-content">{post.content}</div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default Forum;
