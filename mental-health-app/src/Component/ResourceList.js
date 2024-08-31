// ResourceList.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import resourceService from '../Services/ResourceService';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const fetchedResources = await resourceService.getResources();
        setResources(fetchedResources || []);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setResources([]);
      }
    };

    fetchResources();
  }, []);

  return (
    <Container>
      <div className="resource-list">
        <h2>Resources</h2>
        {resources.map(resource => (
          <div key={resource.id} className="resource">
            <Typography variant="h6">{resource.title}</Typography>
            <Typography>{resource.description}</Typography>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ResourceList;
