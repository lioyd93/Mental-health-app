import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

// Placeholder for simulated fetch function to get forum posts data
const fetchForumPosts = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "Feeling overwhelmed with exams",
      content: "Does anyone have tips on managing exam stress?",
    },
    {
      id: 2,
      title: "Balancing school and personal life",
      content: "How do you guys balance your studies and personal life?",
    },
    // Add more posts as needed
  ]);
};

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchForumPosts().then(data => {
      setPosts(data);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleCreatePost = () => {
    // Ideally, you would send a request to your backend to create a new post
    const updatedPosts = [...posts, { id: posts.length + 1, ...newPost }];
    setPosts(updatedPosts);
    setOpen(false);
    setNewPost({ title: '', content: '' });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Forum
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create New Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Post Title"
            type="text"
            fullWidth
            name="title"
            value={newPost.title}
            onChange={handlePostChange}
          />
          <TextField
            margin="dense"
            id="content"
            label="Post Content"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="content"
            value={newPost.content}
            onChange={handlePostChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreatePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
      <List>
        {posts.map(post => (
          <React.Fragment key={post.id}>
            <ListItem alignItems="flex-start">
              <ListItemText primary={post.title} secondary={post.content} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ForumPage;
