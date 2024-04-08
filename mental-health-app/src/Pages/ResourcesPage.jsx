import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, Paper } from '@mui/material';
const tabData = [
  {
    label: "Articles",
    content: [
      { title: "Managing Stress", link: "#", description: "A comprehensive guide to managing stress effectively." },
      { title: "Understanding Anxiety", link: "#", description: "Insights into anxiety and how to cope with it." },
    ],
  },
  {
    label: "Videos",
    content: [
      { title: "Breathing Exercises", link: "#", description: "Learn breathing techniques to help calm your mind." },
      { title: "Yoga for Beginners", link: "#", description: "Yoga routines to help manage anxiety and stress." },
    ],
  },
  {
    label: "Apps",
    content: [
      { title: "MindShift", link: "#", description: "An app designed to help teens and young adults cope with anxiety." },
      { title: "Headspace", link: "#", description: "Meditation made simple." },
    ],
  },
];

const ResourcesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Resources
      </Typography>
      <Paper square>
        <Tabs
          value={selectedTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="resource tabs"
        >
          {tabData.map((tab, index) => (
            <Tab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Paper>
      {tabData[selectedTab].content.map((resource, index) => (
        <Box key={index} p={2} borderBottom={1} borderColor="grey.300">
          <Typography variant="h6" gutterBottom>
            {resource.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {resource.description}
          </Typography>
          <Typography variant="body2">
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesPage;
