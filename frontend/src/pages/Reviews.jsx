import React from 'react';
import { reviews, restaurantInfo } from '../data/mockData';
import { Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const Reviews = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 font-serif">Reviews</h1>
          <p className="text-xl text-gray-300 mb-6">What our guests say about us</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold">{restaurantInfo.rating}</span>
            <span className="text-gray-300">({restaurantInfo.totalReviews} reviews)</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-black">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Share Your Experience
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We'd love to hear from you! Leave us a review on Google
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-200"
            onClick={() =>
              window.open(
                'https://www.google.com/search?q=Vamika+by+Aggarwals',
                '_blank'
              )
            }
          >
            Write a Review
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
