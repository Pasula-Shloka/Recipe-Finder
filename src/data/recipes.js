const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    category: "Indian",
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",

    description:
      "A rich and creamy North Indian curry made with paneer cubes in a flavorful tomato-based gravy.",

    ingredients: [
      "250g Paneer",
      "2 Tomatoes",
      "1 Onion",
      "Fresh Cream",
      "Butter",
      "Garam Masala",
      "Salt"
    ],

    instructions: [
      "Heat butter in a pan.",
      "Saute onions until golden brown.",
      "Add tomatoes and cook until soft.",
      "Blend into a smooth gravy.",
      "Add spices and cream.",
      "Add paneer cubes and simmer.",
      "Serve hot with naan or rice."
    ]
  },

  {
    id: 2,
    title: "Veg Pizza",
    category: "Italian",
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",

    description:
      "Crispy homemade pizza loaded with fresh vegetables and melted cheese.",

    ingredients: [
      "Pizza Base",
      "Pizza Sauce",
      "Cheese",
      "Capsicum",
      "Onion",
      "Olives",
      "Corn"
    ],

    instructions: [
      "Spread pizza sauce on base.",
      "Add vegetables evenly.",
      "Top with cheese.",
      "Bake at 220°C for 15 minutes.",
      "Slice and serve hot."
    ]
  },

  {
    id: 3,
    title: "Hakka Noodles",
    category: "Chinese",
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800",

    description:
      "Street-style Hakka noodles tossed with vegetables and sauces.",

    ingredients: [
      "Noodles",
      "Carrot",
      "Capsicum",
      "Cabbage",
      "Soy Sauce",
      "Garlic",
      "Salt"
    ],

    instructions: [
      "Boil noodles and drain.",
      "Stir-fry vegetables.",
      "Add garlic and sauces.",
      "Mix noodles thoroughly.",
      "Serve immediately."
    ]
  },

  {
    id: 4,
    title: "Chocolate Cake",
    category: "Dessert",
    time: "45 mins",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",

    description:
      "Soft, moist chocolate cake perfect for celebrations and special occasions.",

    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk",
      "Baking Powder"
    ],

    instructions: [
      "Preheat oven.",
      "Mix dry ingredients.",
      "Add wet ingredients.",
      "Pour into cake tin.",
      "Bake for 35 minutes.",
      "Cool and decorate."
    ]
  },

  {
    id: 5,
    title: "Butter Chicken",
    category: "Indian",
    time: "40 mins",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",

    description:
      "Creamy butter chicken cooked in aromatic tomato gravy.",

    ingredients: [
      "Chicken",
      "Tomatoes",
      "Butter",
      "Cream",
      "Spices"
    ],

    instructions: [
      "Marinate chicken.",
      "Cook chicken pieces.",
      "Prepare gravy.",
      "Combine chicken with gravy.",
      "Finish with cream."
    ]
  },

  {
    id: 6,
    title: "Pasta Alfredo",
    category: "Italian",
    time: "25 mins",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",

    description:
      "Creamy Alfredo pasta loaded with cheese and herbs.",

    ingredients: [
      "Pasta",
      "Cream",
      "Garlic",
      "Parmesan Cheese",
      "Butter"
    ],

    instructions: [
      "Cook pasta.",
      "Prepare Alfredo sauce.",
      "Mix pasta and sauce.",
      "Garnish with cheese.",
      "Serve hot."
    ]
  },

  {
    id: 7,
    title: "Fried Rice",
    category: "Chinese",
    time: "20 mins",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",

    description:
      "Flavorful fried rice with vegetables and sauces.",

    ingredients: [
      "Rice",
      "Carrot",
      "Beans",
      "Capsicum",
      "Soy Sauce"
    ],

    instructions: [
      "Cook rice and cool.",
      "Stir-fry vegetables.",
      "Add rice.",
      "Add sauces.",
      "Mix well and serve."
    ]
  },

  {
    id: 8,
    title: "Brownie",
    category: "Dessert",
    time: "35 mins",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",

    description:
      "Rich chocolate brownie with a fudgy texture.",

    ingredients: [
      "Chocolate",
      "Butter",
      "Flour",
      "Sugar",
      "Eggs"
    ],

    instructions: [
      "Melt chocolate and butter.",
      "Mix ingredients.",
      "Pour into tray.",
      "Bake for 25 minutes.",
      "Cool and slice."
    ]
  }
];

export default recipes;