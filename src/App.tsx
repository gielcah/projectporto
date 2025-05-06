import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Commission from './components/Commission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { artworks, commissionTypes } from './data';
import './styles/animations.css';

function App() {
  return (
    <div className="font-[Poppins, sans-serif]">
      <Header artistName="Riszzzu" />
      
      <Hero 
        title="Anime Illustration & Character Design" 
        subtitle="Creating vibrant, expressive anime artworks and character designs that bring your ideas to life." 
      />
      
      <Gallery artworks={artworks} />
      
      <About />
      
      <Commission commissionTypes={commissionTypes} />
      
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;