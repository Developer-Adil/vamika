import React, { useState } from 'react';
import { restaurantInfo } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 font-serif">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-serif text-black">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white rounded-lg p-6 shadow-md">
                  <MapPin className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Address</h3>
                    <p className="text-gray-700">{restaurantInfo.address}</p>
                    <p className="text-gray-600 text-sm mt-1">{restaurantInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-6 shadow-md">
                  <Phone className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-6 shadow-md">
                  <Mail className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-6 shadow-md">
                  <Clock className="w-6 h-6 text-black mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-black mb-1">Hours</h3>
                    <p className="text-gray-700">Monday - Sunday</p>
                    <p className="text-gray-600 text-sm">11:00 AM - 11:04 PM</p>
                    <p className="text-green-600 text-sm font-medium mt-1">Open Now</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-200"
                  onClick={() => window.open(restaurantInfo.mapUrl, '_blank')}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 font-serif text-black">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif text-black">
            Find Us Here
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4!2d80.94!3d26.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzEyLjAiTiA4MMKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>
        </div>
      </section>

      {/* Reservations CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Ready to Dine With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Reserve your table now for an unforgettable dining experience
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-200"
            onClick={() => window.open(restaurantInfo.reservationUrl, '_blank')}
          >
            Reserve a Table
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
