import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Mental Health Support Network</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/chat">Chat</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
