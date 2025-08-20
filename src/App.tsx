import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import SignatureCollection from './components/SignatureCollection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FEFBF6]">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <SignatureCollection />
      <Testimonials />
      <Newsletter />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;