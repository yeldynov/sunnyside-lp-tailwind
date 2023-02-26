import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Banner />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
