class AuthService {
    // Simulated user data (for demonstration purposes)
    users = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
      // Add more users as needed
    ];
  
    // Function to authenticate user
    login = (username, password) => {
      // Simulate user authentication by checking username and password
      const user = this.users.find(user => user.username === username && user.password === password);
      if (user) {
        // User is authenticated
        return user;
      } else {
        // User authentication failed
        throw new Error('Invalid username or password');
      }
    };
  
    // Function to get user by ID
    getUserById = (id) => {
      // Simulate fetching user data from a database or API
      return this.users.find(user => user.id === id);
    };
  }
  
  
  const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;