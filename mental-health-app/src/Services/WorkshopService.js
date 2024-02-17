class WorkshopService {
    // Simulated workshop data (for demonstration purposes)
    workshops = [
      { id: 1, title: 'Managing Stress Workshop', date: '2024-03-05', time: '3:00 PM - 5:00 PM' },
      { id: 2, title: 'Mindfulness Meditation Session', date: '2024-03-10', time: '10:00 AM - 11:00 AM' },
      { id: 3, title: 'Coping with Anxiety Workshop', date: '2024-03-15', time: '2:00 PM - 4:00 PM' },
      // Add more workshops as needed
    ];
  
    // Function to fetch workshops
    getWorkshops = () => {
      // Simulate fetching workshops from a database or API
      return this.workshops;
    };
  
    // Function to get workshop by ID
    getWorkshopById = (id) => {
      // Simulate fetching workshop data by ID from a database or API
      return this.workshops.find(workshop => workshop.id === id);
    };
  }
  
  const workshopServiceInstance = new WorkshopService();
  export default workshopServiceInstance;
  