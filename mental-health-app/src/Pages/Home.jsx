import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to the Mental Health Support Network</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Our mission is to provide a supportive community and valuable resources for individuals seeking mental health support and guidance, especially students facing challenges like stress, depression, and anxiety.
          </p>
        </section>
        <section>
          <h2>How We Help</h2>
          <p>
            We offer various resources such as articles, podcasts, videos, and educational books related to mental health. Additionally, users can participate in chatting, virtual events, and workshops focused on mental health topics.
          </p>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>
            Sign up now to join our supportive community and access valuable resources for your mental health journey.
          </p>
          {/* Add sign-up button or link here */}
        </section>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
