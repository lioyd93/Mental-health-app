import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import workshopService from './WorkshopService';

const Workshop = ({ workshopId }) => {
  const [workshop, setWorkshop] = useState(null);

  useEffect(() => {
    // Fetch workshop details when the component mounts
    const fetchedWorkshop = workshopService.getWorkshopById(workshopId);
    setWorkshop(fetchedWorkshop);
  }, [workshopId]);

  return (
    <Container maxWidth="md">
    <Box sx={{ marginTop: 4, marginBottom: 4 }}>
     
       
          <Typography variant="h2" gutterBottom>
            {workshop.title}
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1">
              Date: {workshop.date}
            </Typography>
            <Typography variant="body1">
              Time: {workshop.time}
            </Typography>
          </Box>
      
     
        <Typography variant="body1">
          Workshop not found.
        </Typography>
     
    </Box>
  </Container>
  );
};

export default Workshop;
