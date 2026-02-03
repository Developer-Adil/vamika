import React, { useState } from 'react';
import { menuCategories } from '../data/mockData';
import { Leaf } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? menuCategories
      : menuCategories.filter((cat) => cat.id === parseInt(selectedCategory));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 font-serif">Our Menu</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated selection of authentic Indian dishes
          </p>
          <div className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold">
            All-You-Can-Eat Available
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap bg-primary-dark mb-12 p-2 rounded-lg">
              <TabsTrigger
                value="all"
                onClick={() => setSelectedCategory('all')}
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                All Items
              </TabsTrigger>
              {menuCategories && menuCategories.length > 0 && menuCategories.map((category) => {
                return (
                <TabsTrigger
                  key={`cat-${category.id}`}
                  value={category.id.toString()}
                  onClick={() => setSelectedCategory(category.id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Menu Items */}
            <div className="space-y-16">
              {filteredCategories && filteredCategories.length > 0 && filteredCategories.map((category) => {
                return (
                <div key={`category-${category.id}`}>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-serif text-black">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items && category.items.length > 0 && category.items.map((item) => {
                      return (
                      <div
                        key={`item-${item.id}`}
                        className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                      >
                        {item.image && (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-black flex items-center">
                              {item.name}
                              {item.vegetarian && (
                                <Leaf className="w-5 h-5 ml-2 text-green-600" />
                              )}
                            </h3>
                            <span className="text-lg font-bold text-black">{item.price}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
                );
              })}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-300">
            <Leaf className="w-5 h-5 inline mr-2 text-green-400" />
            Vegetarian dishes are marked with a leaf icon. Please inform our staff about any
            dietary restrictions or allergies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
