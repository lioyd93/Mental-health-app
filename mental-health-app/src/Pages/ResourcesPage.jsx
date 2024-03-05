import React from 'react';
import { Container, Typography } from '@mui/material';


const ResourcesPage = () => {
  return (
    <Container>
    <div className="resources-page">
      <header>
        <h1>Resources</h1>
      </header>
      <main>
        <section>
          <h2>Articles</h2>
          <p>
            Explore our collection of articles covering various topics related to mental health, including stress management, anxiety, depression, and more.
          </p>
          {/* Add list of articles */}
        </section>
        <section>
          <h2>Podcasts</h2>
          <p>
            Listen to insightful podcasts featuring discussions on mental health, personal stories, coping strategies, and expert advice.
          </p>
          {/* Add list of podcasts */}
        </section>
        <section>
          <h2>Videos</h2>
          <p>
            Watch informative videos addressing mental health issues, featuring interviews, educational content, and inspirational stories.
          </p>
          {/* Add list of videos */}
        </section>
        <section>
          <h2>Educational Books</h2>
          <p>
            Discover recommended books on mental health topics, including self-help guides, memoirs, and academic resources.
          </p>
          {/* Add list of books */}
        </section>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
    </Container>
  );
};

export default ResourcesPage;
