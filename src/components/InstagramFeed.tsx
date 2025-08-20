import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Elegant earrings'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Beautiful rings'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Luxury necklace'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/9594198/pexels-photo-9594198.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Traditional saree'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Fashion accessories'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Jewelry collection'
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Instagram className="w-12 h-12 text-[#E8B4A0] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-4">
            Follow Our Story
          </h2>
          <p className="text-lg text-[#A0937C] mb-6">
            @shoplune
          </p>
          <p className="text-base text-[#A0937C] max-w-2xl mx-auto">
            Get inspired by our community of elegant women sharing their ShopLune moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="aspect-square group cursor-pointer overflow-hidden relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#E8B4A0] text-white px-8 py-3 font-medium hover:bg-[#D4A086] transition-colors duration-300">
            Follow @shoplune
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;