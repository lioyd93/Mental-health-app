import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import eventService from './EventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchedEvents = eventService.getEvents();
    setEvents(fetchedEvents);
  }, []);

  return (
    <Container>
    <div className="event-list">
      <h2>Events</h2>
      {events.map(event => (
        <div key={event.id} className="event">
          <div className="event-title">{event.title}</div>
          <div className="event-details">
            <div>Date: {event.date}</div>
            <div>Time: {event.time}</div>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default EventList;
