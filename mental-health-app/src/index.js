import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./Component/Header";
import Footer from './Component/Footer';

// Lazy load the page components
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const ChatPage = React.lazy(() => import('./Pages/ChatPage'));
const EventsPage = React.lazy(() => import('./Pages/EventsPage'));
const ForumCategoriesPage = React.lazy(() => import('./Pages/ForumCategoriesPage'));
const WorkshopsPage = React.lazy(() => import('./Pages/WorkshopsPage'));
const ResourcesPage = React.lazy(() => import('./Pages/ResourcesPage'));
const SignIn = React.lazy(() => import('./Component/SignIn'));
const SignUp = React.lazy(() => import('./Component/SignUp'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/Home" element={<Home />} />
          <Route path="/Pages/About" element={<About />} />
          <Route path="/Pages/ChatPage" element={<ChatPage />} />
          <Route path="/Pages/EventsPage" element={<EventsPage />} />
          <Route path="/Pages/ForumCategoriesPage" element={<ForumCategoriesPage />} />
          <Route path="/Pages/WorkshopsPage" element={<WorkshopsPage />} />
          <Route path="/Pages/ResourcesPage" element={<ResourcesPage />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          {/* Add other routes here */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
