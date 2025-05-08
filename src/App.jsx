import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  const location = useLocation();
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    let image = '';
    switch (location.pathname) {
      case '/contact':
        image = '/night_mountains.jpg';
        break;
      case '/aboutme':
        image = '/images/aboutme_background.jpg';
        break;
      default:
        image = '/images/default_background.jpg';
        break;
    }

    setBackgroundStyle({
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      transition: 'background-image 0.5s ease',
    });
  }, [location.pathname]);

  return (
    <div className="app-wrapper" style={backgroundStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
