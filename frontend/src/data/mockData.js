// Mock data for Vamika by Aggarwals Restaurant

export const restaurantInfo = {
  name: "Vamika by Aggarwals",
  tagline: "Authentic Indian Flavors • Premium Dining Experience",
  rating: 4.8,
  totalReviews: 119,
  address: "V3RC+M6P, Uattardhona, Uttar Pradesh 226028",
  location: "RBN Landmark Square",
  phone: "+91 9876543210",
  email: "contact@vamikaaggarwals.com",
  hours: "Open • Closes at 11:04 PM",
  mapUrl: "https://maps.google.com/?q=V3RC+M6P,+Uattardhona,+Uttar+Pradesh+226028",
  reservationUrl: "https://www.swiggy.com/restaurants",
  orderUrl: "https://www.swiggy.com/restaurants"
};

export const heroImages = [
  "https://images.unsplash.com/photo-1751200503125-d8cb239f95ba",
  "https://images.unsplash.com/photo-1689079564957-83e3641c7fd8",
  "https://images.unsplash.com/photo-1758977404398-f0fa4c9487fd"
];

export const menuCategories = [
  {
    id: 1,
    name: "Starters",
    items: [
      {
        id: 101,
        name: "Paneer Tikka",
        description: "Cottage cheese marinated in spices and grilled to perfection",
        price: "₹299",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
      },
      {
        id: 102,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "₹129",
        vegetarian: true,
        image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
      },
      {
        id: 103,
        name: "Tandoori Chicken",
        description: "Tender chicken marinated in yogurt and spices, cooked in tandoor",
        price: "₹349",
        vegetarian: false,
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
      },
      {
        id: 104,
        name: "Hara Bhara Kabab",
        description: "Green vegetables and spinach kababs, pan-fried to crispy perfection",
        price: "₹249",
        vegetarian: true
      }
    ]
  },
  {
    id: 2,
    name: "Main Course",
    items: [
      {
        id: 201,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato-based creamy gravy",
        price: "₹399",
        vegetarian: false,
        image: "https://images.unsplash.com/photo-1710091691802-7dedb8af9a77"
      },
      {
        id: 202,
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes in smooth tomato-cashew gravy",
        price: "₹349",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
      },
      {
        id: 203,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with spiced chicken and fragrant spices",
        price: "₹429",
        vegetarian: false,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
      },
      {
        id: 204,
        name: "Dal Makhani",
        description: "Slow-cooked black lentils with butter and cream",
        price: "₹299",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8"
      },
      {
        id: 205,
        name: "Mutton Rogan Josh",
        description: "Tender mutton cooked in aromatic Kashmiri spices",
        price: "₹499",
        vegetarian: false
      },
      {
        id: 206,
        name: "Veg Biryani",
        description: "Fragrant basmati rice with mixed vegetables and aromatic spices",
        price: "₹329",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
      }
    ]
  },
  {
    id: 3,
    name: "Breads",
    items: [
      {
        id: 301,
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter",
        price: "₹59",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1697155406014-04dc649b0953"
      },
      {
        id: 302,
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and coriander",
        price: "₹69",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1640625314547-aee9a7696589"
      },
      {
        id: 303,
        name: "Tandoori Roti",
        description: "Whole wheat bread cooked in tandoor",
        price: "₹39",
        vegetarian: true
      },
      {
        id: 304,
        name: "Cheese Naan",
        description: "Naan stuffed with melted cheese",
        price: "₹99",
        vegetarian: true
      }
    ]
  },
  {
    id: 4,
    name: "Desserts",
    items: [
      {
        id: 401,
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in sweet rose-flavored syrup",
        price: "₹129",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77"
      },
      {
        id: 402,
        name: "Ras Malai",
        description: "Delicate cottage cheese patties in sweetened creamy milk",
        price: "₹149",
        vegetarian: true,
        image: "https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg"
      },
      {
        id: 403,
        name: "Kheer",
        description: "Traditional rice pudding with cardamom and nuts",
        price: "₹119",
        vegetarian: true
      },
      {
        id: 404,
        name: "Gajar Ka Halwa",
        description: "Warm carrot pudding with ghee, milk and dry fruits",
        price: "₹139",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1728910869936-f0ca79a4342d"
      }
    ]
  },
  {
    id: 5,
    name: "Beverages",
    items: [
      {
        id: 501,
        name: "Masala Chai",
        description: "Traditional Indian tea with aromatic spices",
        price: "₹49",
        vegetarian: true
      },
      {
        id: 502,
        name: "Sweet Lassi",
        description: "Refreshing yogurt-based drink",
        price: "₹79",
        vegetarian: true
      },
      {
        id: 503,
        name: "Mango Lassi",
        description: "Creamy mango and yogurt smoothie",
        price: "₹99",
        vegetarian: true
      },
      {
        id: 504,
        name: "Fresh Lime Soda",
        description: "Tangy lime juice with soda water",
        price: "₹69",
        vegetarian: true
      }
    ]
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1751200503125-d8cb239f95ba",
  "https://images.unsplash.com/photo-1689079564957-83e3641c7fd8",
  "https://images.unsplash.com/photo-1649140041688-0f75446e707e",
  "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c",
  "https://images.unsplash.com/photo-1758977404398-f0fa4c9487fd",
  "https://images.unsplash.com/photo-1758977245928-296e47fa2155",
  "https://images.pexels.com/photos/35591597/pexels-photo-35591597.jpeg",
  "https://images.unsplash.com/photo-1710091691802-7dedb8af9a77",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
  "https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8",
  "https://images.pexels.com/photos/35287423/pexels-photo-35287423.jpeg",
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  "https://images.unsplash.com/photo-1697155406014-04dc649b0953",
  "https://images.unsplash.com/photo-1640625314547-aee9a7696589",
  "https://images.unsplash.com/photo-1728910869936-f0ca79a4342d",
  "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77",
  "https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
  "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg"
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing food and wonderful ambiance! The butter chicken was absolutely delicious. The all-you-can-eat experience was worth every penny.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Best Indian restaurant in the area. The biryani is authentic and the service is excellent. Highly recommend for family dining.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    rating: 5,
    comment: "Exceptional dining experience! The paneer tikka was perfectly spiced and the naan was fresh from the tandoor. Will definitely return.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 4,
    comment: "Great food quality and portion sizes. The staff is very courteous and attentive. A must-visit for Indian cuisine lovers.",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Meera Patel",
    rating: 5,
    comment: "The all-you-can-eat buffet is incredible! So many options and everything tastes authentic. The desserts were divine.",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Amit Verma",
    rating: 5,
    comment: "Outstanding food and service. The tandoori chicken melts in your mouth. Premium quality at reasonable prices.",
    date: "2 weeks ago"
  }
];

export const aboutContent = {
  title: "Our Story",
  description: "Vamika by Aggarwals is a celebration of authentic Indian cuisine, where tradition meets premium dining. Located in the heart of Uttar Pradesh, we bring you an unforgettable culinary journey through the rich flavors of India.",
  highlights: [
    {
      title: "Quality Ingredients",
      description: "We source only the finest ingredients and freshest spices to create authentic flavors that transport you to the heart of India."
    },
    {
      title: "Expert Chefs",
      description: "Our experienced chefs bring generations of culinary expertise, crafting each dish with passion and precision."
    },
    {
      title: "All-You-Can-Eat",
      description: "Experience unlimited dining with our premium all-you-can-eat offering, featuring a wide selection of vegetarian and non-vegetarian delicacies."
    },
    {
      title: "Warm Hospitality",
      description: "From the moment you step in, our dedicated team ensures you feel at home with attentive service and a welcoming atmosphere."
    }
  ]
};
