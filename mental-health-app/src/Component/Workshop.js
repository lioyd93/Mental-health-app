// WorkshopList.js
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import workshopService from '../Services/WorkshopService';

const WorkshopList = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const fetchedWorkshops = await workshopService.getWorkshops();
        setWorkshops(fetchedWorkshops || []);
      } catch (error) {
        console.error('Error fetching workshops:', error);
        setWorkshops([]);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <Container>
      <div className="workshop-list">
        <h2>Workshops</h2>
        {workshops.map(workshop => (
          <div key={workshop.id} className="workshop">
            <Typography variant="h6">{workshop.title}</Typography>
            <Typography>{workshop.description}</Typography>
            <div>Date: {workshop.date}</div>
            <div>Time: {workshop.time}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkshopList;
