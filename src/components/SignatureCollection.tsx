import React from 'react';

const SignatureCollection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3702642/pexels-photo-3702642.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Signature collection"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Signature
            <span className="block italic text-[#F7E7CE] mt-2">Collection</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Handcrafted pieces that tell your unique story
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-[#8B7355] transition-all duration-300 transform hover:scale-105">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white opacity-20 transform rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white opacity-20 transform rotate-45"></div>
    </section>
  );
};

export default SignatureCollection;