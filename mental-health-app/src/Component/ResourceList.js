import React, { useState, useEffect } from 'react';
import resourceService from './ResourceService';

const ResourceList = ({ resourceType }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch resources when the component mounts
    const fetchedResources = resourceService.getResources(resourceType);
    setResources(fetchedResources);
  }, [resourceType]);

  return (
    <div className="resource-list">
      <h2>{resourceType.charAt(0).toUpperCase() + resourceType.slice(1)} Resources</h2>
      {resources.map(resource => (
        <div key={resource.id} className="resource">
          <div className="resource-title">{resource.title}</div>
          <div className="resource-description">{resource.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
