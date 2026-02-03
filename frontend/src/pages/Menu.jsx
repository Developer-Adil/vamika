import React, { useState } from 'react';
import { menuCategories } from '../data/mockData';
import { Leaf } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const MenuItem = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
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

const MenuCategory = ({ category }) => {
  const items = category.items || [];
  
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-serif text-black">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.length > 0 && items[0] && <MenuItem item={items[0]} />}
        {items.length > 1 && items[1] && <MenuItem item={items[1]} />}
        {items.length > 2 && items[2] && <MenuItem item={items[2]} />}
        {items.length > 3 && items[3] && <MenuItem item={items[3]} />}
        {items.length > 4 && items[4] && <MenuItem item={items[4]} />}
        {items.length > 5 && items[5] && <MenuItem item={items[5]} />}
      </div>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = menuCategories || [];

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === parseInt(selectedCategory));

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
              {categories.length > 0 && categories[0] && (
                <TabsTrigger
                  value={categories[0].id.toString()}
                  onClick={() => setSelectedCategory(categories[0].id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {categories[0].name}
                </TabsTrigger>
              )}
              {categories.length > 1 && categories[1] && (
                <TabsTrigger
                  value={categories[1].id.toString()}
                  onClick={() => setSelectedCategory(categories[1].id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {categories[1].name}
                </TabsTrigger>
              )}
              {categories.length > 2 && categories[2] && (
                <TabsTrigger
                  value={categories[2].id.toString()}
                  onClick={() => setSelectedCategory(categories[2].id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {categories[2].name}
                </TabsTrigger>
              )}
              {categories.length > 3 && categories[3] && (
                <TabsTrigger
                  value={categories[3].id.toString()}
                  onClick={() => setSelectedCategory(categories[3].id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {categories[3].name}
                </TabsTrigger>
              )}
              {categories.length > 4 && categories[4] && (
                <TabsTrigger
                  value={categories[4].id.toString()}
                  onClick={() => setSelectedCategory(categories[4].id.toString())}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {categories[4].name}
                </TabsTrigger>
              )}
            </TabsList>

            {/* Menu Items */}
            <div className="space-y-16">
              {filteredCategories.length > 0 && filteredCategories[0] && <MenuCategory category={filteredCategories[0]} />}
              {filteredCategories.length > 1 && filteredCategories[1] && <MenuCategory category={filteredCategories[1]} />}
              {filteredCategories.length > 2 && filteredCategories[2] && <MenuCategory category={filteredCategories[2]} />}
              {filteredCategories.length > 3 && filteredCategories[3] && <MenuCategory category={filteredCategories[3]} />}
              {filteredCategories.length > 4 && filteredCategories[4] && <MenuCategory category={filteredCategories[4]} />}
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
