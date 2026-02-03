import React from 'react';
import { aboutContent, heroImages } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white font-serif">About Us</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif text-black">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {aboutContent.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-primary-dark rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-8 h-8 text-black flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-black">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center font-serif text-black">
            Our Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Restaurant view ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-serif">Our Promise</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Vamika by Aggarwals, we are committed to providing not just a meal, but an
            experience. Every dish is prepared with love, every ingredient is carefully selected,
            and every guest is treated like family. Our mission is to bring the authentic flavors
            of India to your table while creating memories that last a lifetime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
