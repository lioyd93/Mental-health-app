import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./Component/Header";
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import ChatPage from './Pages/ChatPage';
import EventsPage from './Pages/EventsPage';
import ForumPage from './Pages/ForumPage';
import WorkshopsPage from './Pages/WorkshopsPage';
import ResourcesPage from './Pages/ResourcesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Home />} />

        {/* Other Routes */}
        <Route path="/Pages/Home" element={<Home />} />
        <Route path="/Pages/about" element={<About />} />
        <Route path="/Pages/ChatPage" element={<ChatPage />} />
        <Route path="/Pages/EventsPage" element={<EventsPage />} />
        <Route path="/Pages/ForumPage" element={<ForumPage />} />
        <Route path="/Pages/WorkshopsPage" element={<WorkshopsPage />} />
        <Route path="/Pages/ResourcesPage" element={<ResourcesPage />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
