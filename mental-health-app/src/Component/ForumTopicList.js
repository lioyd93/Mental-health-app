import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import forumService from '../Services/ForumService';

const ForumTopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await forumService.getTopics();
        setTopics(fetchedTopics || []);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setTopics([]);
      }
    };

    fetchTopics();
  }, []);

  return (
    <Container>
      <div className="forum-topic-list">
        <h2>Forum Topics</h2>
        {topics.map(topic => (
          <div key={topic.id} className="forum-topic">
            <Typography variant="h6">{topic.title}</Typography>
            <Typography>{new Date(topic.created_at).toLocaleString()}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ForumTopicList;
