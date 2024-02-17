class ResourceService {
    // Simulated resource data (for demonstration purposes)
    resources = {
      articles: [
        { id: 1, title: 'Managing Stress', description: 'Tips for managing stress in daily life.' },
        { id: 2, title: 'Understanding Anxiety', description: 'Information about anxiety and coping strategies.' },
        // Add more articles as needed
      ],
      podcasts: [
        { id: 1, title: 'Mental Health Matters', description: 'Podcast series discussing various mental health topics.' },
        { id: 2, title: 'The Anxiety Podcast', description: 'Podcast episodes focusing on anxiety and mental wellness.' },
        // Add more podcasts as needed
      ],
      videos: [
        { id: 1, title: 'Coping with Depression', description: 'Video discussing strategies for coping with depression.' },
        { id: 2, title: 'Mindfulness Meditation', description: 'Guided meditation video for practicing mindfulness.' },
        // Add more videos as needed
      ],
      books: [
        { id: 1, title: 'The Anxiety and Phobia Workbook', description: 'A self-help guide for overcoming anxiety and phobias.' },
        { id: 2, title: 'Feeling Good: The New Mood Therapy', description: 'Book on cognitive behavioral therapy for depression.' },
        // Add more books as needed
      ]
    };
  
    // Function to fetch resources by type
    getResources = (resourceType) => {
      // Simulate fetching resources by type from a database or API
      return this.resources[resourceType];
    };
  
    // Function to get resource by ID and type
    getResourceById = (resourceType, id) => {
      // Simulate fetching resource data by type and ID from a database or API
      return this.resources[resourceType].find(resource => resource.id === id);
    };
  }
  
  const resourceServiceInstance = new ResourceService();
  export default resourceServiceInstance;
  