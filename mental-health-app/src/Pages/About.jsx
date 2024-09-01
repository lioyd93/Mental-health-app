import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

// Placeholder data for team members or project goals. Ideally, this would come from the backend.
const teamMembers = [
  {
    name: "Dr. fake Jones",
    role: "Clinical Psychologist",
    imageUrl: "/images/alice.jpg",
    description: "Specializes in cognitive behavioral therapy and has over 10 years of experience."
  },
  {
    name: "Bob Smith",
    role: "Support Coordinator",
    imageUrl: "/images/bob.jpg",
    description: "Passionate about providing support and resources for mental health."
  }
];

const About = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        Our mission is to support students facing mental health challenges by providing a platform
        for support, resources, and community engagement. We understand the pressures of student life
        and strive to offer a safe space for discussion, learning, and growth.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                style={{ height: 140 }}
                image={member.imageUrl}
                title={member.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body1">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
