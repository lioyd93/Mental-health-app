class EventService {
    // Simulated event data (for demonstration purposes)
    events = [
      { id: 1, title: 'Virtual Support Group', date: '2024-02-15', time: '10:00 AM' },
      { id: 2, title: 'Mindfulness Workshop', date: '2024-02-20', time: '2:00 PM' },
      { id: 3, title: 'Stress Management Webinar', date: '2024-02-25', time: '11:00 AM' },
      // Add more events as needed
    ];
  
    // Function to fetch events
    getEvents = () => {
      // Simulate fetching events from a database or API
      return this.events;
    };
  
    // Function to get event by ID
    getEventById = (id) => {
      // Simulate fetching event data by ID from a database or API
      return this.events.find(event => event.id === id);
    };
  }
  
  const eventServiceInstance = new EventService();
  export default eventServiceInstance;
  