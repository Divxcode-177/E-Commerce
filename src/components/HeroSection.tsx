import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Beautiful woman portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Timeless
          <span className="block italic text-[#F7E7CE]">Elegance</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          Discover our curated collection of luxury jewelry and ethnic wear
        </p>
        <button className="bg-[#E8B4A0] text-white px-8 py-4 text-lg font-medium hover:bg-[#D4A086] transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;