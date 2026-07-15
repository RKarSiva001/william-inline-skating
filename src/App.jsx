import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import LocationMap from './components/LocationMap';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-wrapper">
      {/* Background Organic Ambient Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <div className="d-none d-lg-block">
        <Sidebar />
      </div>

      <div className="main-container">
        <main className="w-100">
          <Hero />
          <About />
          <Schedule />
          <Pricing />
          <LocationMap />
          <Gallery />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;