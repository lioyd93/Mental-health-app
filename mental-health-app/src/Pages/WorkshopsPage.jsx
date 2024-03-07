import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

const WorkshopsPage = () => {
  // State to store workshops
  const [workshops, setWorkshops] = useState([]);

  // Function to fetch workshops from an API
  useEffect(() => {
    // Fetch workshops from an API endpoint
    // Example: fetch('https://api.example.com/workshops')
    //   .then(response => response.json())
    //   .then(data => setWorkshops(data));
    // For demonstration purposes, let's use mock data:
    const mockWorkshops = [
      { id: 1, title: 'Managing Stress Workshop', date: '2024-03-05', time: '3:00 PM - 5:00 PM' },
      { id: 2, title: 'Mindfulness Meditation Session', date: '2024-03-10', time: '10:00 AM - 11:00 AM' },
      { id: 3, title: 'Coping with Anxiety Workshop', date: '2024-03-15', time: '2:00 PM - 4:00 PM' },
    ];
    setWorkshops(mockWorkshops);
  }, []);

  return (
    <Container>
    <div className="workshops-page">
      
      <header>
        <h1>Workshops</h1>
      </header>
      <main>
        <div className="workshop-list">
          {workshops.map(workshop => (
            <div key={workshop.id} className="workshop">
              <div className="workshop-title">{workshop.title}</div>
              <div className="workshop-details">
                <div>Date: {workshop.date}</div>
                <div>Time: {workshop.time}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
    </Container>
  );
};

export default WorkshopsPage;
