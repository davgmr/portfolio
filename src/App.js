import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Services'; 
import Technologies from './components/sections/Technologies';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import DaviBot from './components/common/DaviBot';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
      <DaviBot />
    </div>
  );
}

export default App;