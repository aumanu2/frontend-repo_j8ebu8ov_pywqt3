import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
