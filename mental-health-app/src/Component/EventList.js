import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import eventService from '../Services/EventService';

const EventList = () => {
  const [events, setEvents] = useState([]);  // Ensure this is an empty array

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await eventService.getEvents();
        setEvents(fetchedEvents || []);  // Ensure fallback to empty array if the response is not an array
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);  // In case of error, fallback to empty array
      }
    };

    fetchEvents();
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