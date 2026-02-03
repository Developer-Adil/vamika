import React from 'react';
import { Link } from 'react-router-dom';
import { Star, UtensilsCrossed, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { restaurantInfo, heroImages, aboutContent } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              {restaurantInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-4">
              {restaurantInfo.tagline}
            </p>
            
            {/* Rating */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-black">{restaurantInfo.rating}</span>
                <span className="text-gray-600">({restaurantInfo.totalReviews} reviews)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 transition-all duration-200 hover:scale-105"
                onClick={() => window.open(restaurantInfo.reservationUrl, '_blank')}
              >
                Reserve a Table
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-200 hover:scale-105 border-2 border-white"
                onClick={() => window.open(restaurantInfo.orderUrl, '_blank')}
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <UtensilsCrossed size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Authentic Cuisine</h3>
              <p className="text-gray-700">Traditional recipes passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">All You Can Eat</h3>
              <p className="text-gray-700">Unlimited dining experience with premium offerings</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Extended Hours</h3>
              <p className="text-gray-700">Open till 11:04 PM every day for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif text-black">
                {aboutContent.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {aboutContent.description}
              </p>
              <Link to="/about">
                <Button
                  className="bg-black text-white hover:bg-gray-800 transition-all duration-200"
                  size="lg"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={heroImages[1]}
                alt="Restaurant Interior"
                className="rounded-lg w-full h-64 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <img
                src={heroImages[2]}
                alt="Dining Experience"
                className="rounded-lg w-full h-64 object-cover shadow-lg transition-transform duration-300 hover:scale-105 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif text-black">
            Explore Our Menu
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover a wide variety of authentic Indian dishes, from aromatic curries to tandoori specialties
          </p>
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition-all duration-200"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif">
            Ready to Experience Authentic Indian Cuisine?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book your table now or order online for a delightful dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-200"
              onClick={() => window.open(restaurantInfo.reservationUrl, '_blank')}
            >
              Reserve Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 transition-all duration-200"
              onClick={() => window.open(restaurantInfo.orderUrl, '_blank')}
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
