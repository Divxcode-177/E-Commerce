import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    review: 'The jewelry quality is absolutely stunning. Each piece feels like a work of art.',
    rating: 5,
    location: 'Mumbai'
  },
  {
    name: 'Anjali Patel',
    review: 'Their saree collection is divine. The craftsmanship and attention to detail is remarkable.',
    rating: 5,
    location: 'Delhi'
  },
  {
    name: 'Riya Kapoor',
    review: 'I feel like a queen wearing their jewelry. The customer service is exceptional too.',
    rating: 5,
    location: 'Bangalore'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#F5E6D3] bg-opacity-30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B7355] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#A0937C] max-w-2xl mx-auto">
            Hear from women who have found their perfect pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#E8B4A0] fill-current" />
                ))}
              </div>
              <p className="text-[#8B7355] mb-6 italic font-serif text-lg leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="border-t border-[#F5E6D3] pt-4">
                <h4 className="font-medium text-[#8B7355]">{testimonial.name}</h4>
                <p className="text-[#A0937C] text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;