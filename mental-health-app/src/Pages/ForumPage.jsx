import React, { useState, useEffect } from 'react';

const ForumPage = () => {
  // State to store forum posts
  const [posts, setPosts] = useState([]);

  // Function to fetch forum posts from an API
  useEffect(() => {
    // Fetch forum posts from an API endpoint
    // Example: fetch('https://api.example.com/forum/posts')
    //   .then(response => response.json())
    //   .then(data => setPosts(data));
    // For demonstration purposes, let's use mock data:
    const mockPosts = [
      { id: 1, title: 'Feeling stressed about exams', content: 'I have exams coming up and I feel overwhelmed. Any tips for managing stress?' },
      { id: 2, title: 'Dealing with anxiety', content: 'I struggle with anxiety and its affecting my daily life. How do you cope with anxiety?' },
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className="forum-page">
      <header>
        <h1>Forum</h1>
      </header>
      <main>
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-title">{post.title}</div>
              <div className="post-content">{post.content}</div>
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

export default ForumPage;
