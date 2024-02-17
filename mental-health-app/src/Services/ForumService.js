class ForumService {
    // Simulated forum posts data (for demonstration purposes)
    posts = [
      { id: 1, title: 'Feeling stressed about exams', content: 'I have exams coming up and I feel overwhelmed. Any tips for managing stress?' },
      { id: 2, title: 'Dealing with anxiety', content: 'I struggle with anxiety and it\'s affecting my daily life. How do you cope with anxiety?' },
      { id: 3, title: 'Looking for support', content: 'I\'m feeling really down and could use some support from others who understand. Anyone else feeling the same?' },
      // Add more posts as needed
    ];
  
    // Function to fetch forum posts
    getPosts = () => {
      // Simulate fetching forum posts from a database or API
      return this.posts;
    };
  
    // Function to get post by ID
    getPostById = (id) => {
      // Simulate fetching post data by ID from a database or API
      return this.posts.find(post => post.id === id);
    };
  }
  
  const forumServiceInstance = new ForumService();
  export default forumServiceInstance;
  