import React, { useState, useEffect } from 'react';

const EventsPage = () => {
  // State to store events
  const [events, setEvents] = useState([]);

  // Function to fetch events from an API
  useEffect(() => {
    // Fetch events from an API endpoint
    // Example: fetch('https://api.example.com/events')
    //   .then(response => response.json())
    //   .then(data => setEvents(data));
    // For demonstration purposes, let's use mock data:
    const mockEvents = [
      { id: 1, title: 'Virtual Support Group', date: '2024-02-15', time: '10:00 AM' },
      { id: 2, title: 'Mindfulness Workshop', date: '2024-02-20', time: '2:00 PM' },
      { id: 3, title: 'Stress Management Webinar', date: '2024-02-25', time: '11:00 AM' },
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <div className="events-page">
      <header>
        <h1>Events</h1>
      </header>
      <main>
        <div className="event-list">
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
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default EventsPage;
