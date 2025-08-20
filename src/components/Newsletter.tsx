import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#F7E7CE] to-[#F5E6D3]">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in">
          <Mail className="w-12 h-12 text-[#E8B4A0] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-4">
            Stay in Touch
          </h2>
          <p className="text-lg text-[#A0937C] mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-[#8B7355] bg-white border-0 focus:outline-none focus:ring-2 focus:ring-[#E8B4A0] md:rounded-l-none rounded-t-md md:rounded-t-none md:rounded-l-md"
              required
            />
            <button
              type="submit"
              className="bg-[#E8B4A0] text-white px-8 py-4 font-medium hover:bg-[#D4A086] transition-colors duration-300 md:rounded-r-md rounded-b-md md:rounded-b-none"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-[#A0937C] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;