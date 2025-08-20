import React from 'react';

const categories = [
  {
    name: 'Rings',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant statement pieces'
  },
  {
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Graceful neck adornments'
  },
  {
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Delicate ear jewelry'
  },
  {
    name: 'Sarees',
    image: 'https://images.pexels.com/photos/9594198/pexels-photo-9594198.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional ethnic wear'
  },
  {
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury handbags & more'
  },
  {
    name: 'New In',
    image: 'https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Latest arrivals'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-[#A0937C] max-w-2xl mx-auto">
            Explore our carefully curated collections of luxury jewelry and ethnic wear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;