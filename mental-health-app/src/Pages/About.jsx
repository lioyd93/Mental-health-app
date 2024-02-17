import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a supportive community and valuable resources for individuals seeking mental health support and guidance, especially students facing challenges like stress, depression, and anxiety.
          </p>
        </section>
        <section>
          <h2>Our Approach</h2>
          <p>
            We believe in promoting mental health awareness and destigmatizing mental health issues. Our approach involves providing access to educational resources, facilitating open discussions, and fostering a supportive community where individuals can share their experiences and find support.
          </p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>
            Meet the dedicated team behind the Mental Health Support Network who are committed to making a positive impact on mental health awareness and support.
          </p>
          {/* Add team members' information and photos here */}
        </section>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default AboutPage;
