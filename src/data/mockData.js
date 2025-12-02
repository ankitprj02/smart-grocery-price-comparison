export const products = [
    // Staples (1-20)
    {
        id: 1,
        name: "Aashirvaad Shudh Chakki Atta (5kg)",
        image: "https://images.unsplash.com/photo-1626139576127-4522960672b3?auto=format&fit=crop&w=300&q=80", // Wheat flour
        category: "Staples",
        prices: [{ store: "Blinkit", price: 240 }, { store: "Zepto", price: 235 }, { store: "BigBasket", price: 228 }],
        description: "Premium quality whole wheat flour made from the finest grains. Perfect for making soft rotis.",
        nutrition: "Per 100g: Energy 360kcal, Protein 12g, Carbs 75g, Fat 1.5g",
        aiContext: "This atta is known for its water absorption, keeping rotis soft for longer. It's high in fiber."
    },
    {
        id: 2,
        name: "Tata Salt (1kg)",
        image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=300&q=80", // Salt/Powder
        category: "Staples",
        prices: [{ store: "Blinkit", price: 28 }, { store: "Zepto", price: 25 }, { store: "BigBasket", price: 24 }],
        description: "Vacuum evaporated iodized salt. Helps in mental development of children.",
        nutrition: "Per 100g: Energy 0kcal, Sodium 38g, Iodine 15ppm",
        aiContext: "Tata Salt is India's first packaged iodized salt. It's essential for preventing iodine deficiency disorders."
    },
    {
        id: 3,
        name: "Fortune Sunlite Refined Sunflower Oil (1L)",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80", // Oil bottle
        category: "Staples",
        prices: [{ store: "Blinkit", price: 145 }, { store: "Zepto", price: 140 }, { store: "BigBasket", price: 138 }],
        description: "Light and healthy sunflower oil, easy to digest and rich in Vitamin E.",
        nutrition: "Per 100g: Energy 900kcal, Fat 100g, Vitamin E 35mg",
        aiContext: "This oil has a high smoke point, making it suitable for deep frying. It helps maintain heart health."
    },
    {
        id: 4,
        name: "India Gate Basmati Rice (1kg)",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80", // Rice
        category: "Staples",
        prices: [{ store: "Blinkit", price: 160 }, { store: "Zepto", price: 155 }, { store: "BigBasket", price: 148 }],
        description: "Aged basmati rice with long grains and aromatic flavor.",
        nutrition: "Per 100g: Energy 350kcal, Carbs 78g, Protein 8g",
        aiContext: "Best for Biryani and Pulao. Soak for 30 minutes before cooking for best results."
    },
    {
        id: 5,
        name: "Tata Sampann Tur Dal (1kg)",
        image: "https://images.unsplash.com/photo-1585996687494-275d5e533c43?auto=format&fit=crop&w=300&q=80", // Lentils/Dal
        category: "Staples",
        prices: [{ store: "Blinkit", price: 170 }, { store: "Zepto", price: 165 }, { store: "BigBasket", price: 160 }],
        description: "Unpolished Tur Dal, rich in protein and natural taste.",
        nutrition: "Per 100g: Energy 340kcal, Protein 22g, Carbs 60g",
        aiContext: "No cholesterol and no additives. Unpolished dal retains more nutrients than polished ones."
    },
    {
        id: 6,
        name: "Madhur Sugar (1kg)",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80", // Sugar/White powder
        category: "Staples",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }],
        description: "Pure and hygienic sulphur-free sugar crystals.",
        nutrition: "Per 100g: Energy 398kcal, Carbs 99.8g, Protein 0g",
        aiContext: "Sulphur-free process ensures it's safer for consumption. Dissolves easily in beverages."
    },
    {
        id: 7,
        name: "Everest Turmeric Powder (100g)",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=300&q=80", // Turmeric
        category: "Staples",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 8,
        name: "Everest Red Chilli Powder (100g)",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80", // Red spices
        category: "Staples",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 9,
        name: "MDH Garam Masala (100g)",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80", // Spices
        category: "Staples",
        prices: [{ store: "Blinkit", price: 85 }, { store: "Zepto", price: 82 }, { store: "BigBasket", price: 80 }]
    },
    {
        id: 10,
        name: "Fortune Besan (500g)",
        image: "https://images.unsplash.com/photo-1615485290386-428a48787a2f?auto=format&fit=crop&w=300&q=80", // Flour/Powder
        category: "Staples",
        prices: [{ store: "Blinkit", price: 60 }, { store: "Zepto", price: 58 }, { store: "BigBasket", price: 55 }]
    },
    {
        id: 11,
        name: "Tata Sampann Moong Dal (500g)",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&w=300&q=80", // Moong Dal
        category: "Staples",
        prices: [{ store: "Blinkit", price: 90 }, { store: "Zepto", price: 88 }, { store: "BigBasket", price: 85 }]
    },
    {
        id: 12,
        name: "Tata Sampann Chana Dal (500g)",
        image: "https://images.unsplash.com/photo-1585996687494-275d5e533c43?auto=format&fit=crop&w=300&q=80", // Chana Dal
        category: "Staples",
        prices: [{ store: "Blinkit", price: 65 }, { store: "Zepto", price: 62 }, { store: "BigBasket", price: 60 }]
    },
    {
        id: 13,
        name: "Saffola Gold Oil (1L)",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80", // Oil
        category: "Staples",
        prices: [{ store: "Blinkit", price: 190 }, { store: "Zepto", price: 185 }, { store: "BigBasket", price: 180 }]
    },
    {
        id: 14,
        name: "Dhara Mustard Oil (1L)",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80", // Oil
        category: "Staples",
        prices: [{ store: "Blinkit", price: 160 }, { store: "Zepto", price: 155 }, { store: "BigBasket", price: 150 }]
    },
    {
        id: 15,
        name: "Catch Jeera Powder (100g)",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80", // Spices
        category: "Staples",
        prices: [{ store: "Blinkit", price: 70 }, { store: "Zepto", price: 68 }, { store: "BigBasket", price: 65 }]
    },
    {
        id: 16,
        name: "Catch Black Pepper Powder (100g)",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=300&q=80", // Pepper
        category: "Staples",
        prices: [{ store: "Blinkit", price: 120 }, { store: "Zepto", price: 115 }, { store: "BigBasket", price: 110 }]
    },
    {
        id: 17,
        name: "Rajdhani Sooji (500g)",
        image: "https://images.unsplash.com/photo-1626139576127-4522960672b3?auto=format&fit=crop&w=300&q=80", // Semolina/Flour
        category: "Staples",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 18,
        name: "Rajdhani Poha (500g)",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80", // Poha/Rice flakes
        category: "Staples",
        prices: [{ store: "Blinkit", price: 40 }, { store: "Zepto", price: 38 }, { store: "BigBasket", price: 35 }]
    },
    {
        id: 19,
        name: "Nutrela Soya Chunks (200g)",
        image: "https://images.unsplash.com/photo-1615485290386-428a48787a2f?auto=format&fit=crop&w=300&q=80", // Soya chunks
        category: "Staples",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }]
    },
    {
        id: 20,
        name: "Kellogg's Corn Flakes (475g)",
        image: "https://images.unsplash.com/photo-1521483450569-b59417715b4f?auto=format&fit=crop&w=300&q=80", // Cereal
        category: "Staples",
        prices: [{ store: "Blinkit", price: 190 }, { store: "Zepto", price: 185 }, { store: "BigBasket", price: 180 }]
    },

    // Dairy & Bakery (21-40)
    {
        id: 21,
        name: "Amul Taaza Toned Milk (1L)",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80", // Milk carton
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 54 }, { store: "Zepto", price: 54 }, { store: "BigBasket", price: 52 }]
    },
    {
        id: 22,
        name: "Amul Butter (100g)",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80", // Butter
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 56 }, { store: "Zepto", price: 55 }, { store: "BigBasket", price: 54 }]
    },
    {
        id: 23,
        name: "Britannia Brown Bread",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80", // Bread
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 50 }, { store: "Zepto", price: 48 }, { store: "BigBasket", price: 45 }]
    },
    {
        id: 24,
        name: "Amul Cheese Slices (200g)",
        image: "https://images.unsplash.com/photo-1624806992066-5ffcf072b3ef?auto=format&fit=crop&w=300&q=80", // Cheese
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 140 }, { store: "Zepto", price: 135 }, { store: "BigBasket", price: 130 }]
    },
    {
        id: 25,
        name: "Mother Dairy Curd (400g)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Yogurt/Curd
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 26,
        name: "Amul Paneer (200g)",
        image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=300&q=80", // Paneer/Cheese block
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 90 }, { store: "Zepto", price: 88 }, { store: "BigBasket", price: 85 }]
    },
    {
        id: 27,
        name: "Farm Fresh Eggs (6 pcs)",
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=300&q=80", // Eggs
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 60 }, { store: "Zepto", price: 58 }, { store: "BigBasket", price: 55 }]
    },
    {
        id: 28,
        name: "Britannia White Bread",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80", // Bread
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 29,
        name: "Amul Fresh Cream (250ml)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Cream
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 70 }, { store: "Zepto", price: 68 }, { store: "BigBasket", price: 65 }]
    },
    {
        id: 30,
        name: "Yakult Probiotic Drink (5 pack)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Yogurt drink
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 85 }, { store: "Zepto", price: 82 }, { store: "BigBasket", price: 80 }]
    },
    {
        id: 31,
        name: "Milky Mist Fruit Yogurt (100g)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Fruit yogurt
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 32,
        name: "Amul Lassi (200ml)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Lassi
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 25 }, { store: "Zepto", price: 22 }, { store: "BigBasket", price: 20 }]
    },
    {
        id: 33,
        name: "Amul Buttermilk (200ml)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Buttermilk
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 15 }, { store: "Zepto", price: 14 }, { store: "BigBasket", price: 12 }]
    },
    {
        id: 34,
        name: "Britannia Fruit Cake",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80", // Cake
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 50 }, { store: "Zepto", price: 48 }, { store: "BigBasket", price: 45 }]
    },
    {
        id: 35,
        name: "Amul Gold Full Cream Milk (1L)",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80", // Milk
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 66 }, { store: "Zepto", price: 66 }, { store: "BigBasket", price: 64 }]
    },
    {
        id: 36,
        name: "Mother Dairy Cow Milk (1L)",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80", // Milk
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 56 }, { store: "Zepto", price: 56 }, { store: "BigBasket", price: 54 }]
    },
    {
        id: 37,
        name: "Amul Masti Dahi (400g)",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80", // Curd
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 38,
        name: "Britannia Rusk (200g)",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80", // Rusk
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 39,
        name: "Amul Cheese Cubes (200g)",
        image: "https://images.unsplash.com/photo-1624806992066-5ffcf072b3ef?auto=format&fit=crop&w=300&q=80", // Cheese
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 130 }, { store: "Zepto", price: 125 }, { store: "BigBasket", price: 120 }]
    },
    {
        id: 40,
        name: "Mother Dairy Paneer (200g)",
        image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=300&q=80", // Paneer
        category: "Dairy & Bakery",
        prices: [{ store: "Blinkit", price: 90 }, { store: "Zepto", price: 88 }, { store: "BigBasket", price: 85 }]
    },

    // Snacks (41-60)
    {
        id: 41,
        name: "Maggi 2-Minute Noodles (280g)",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=300&q=80", // Noodles
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 52 }, { store: "Zepto", price: 50 }, { store: "BigBasket", price: 48 }]
    },
    {
        id: 42,
        name: "Britannia Good Day Cashew Cookies (200g)",
        image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80", // Cookies
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 40 }, { store: "Zepto", price: 38 }, { store: "BigBasket", price: 35 }]
    },
    {
        id: 43,
        name: "Lays Classic Salted Chips (50g)",
        image: "https://images.unsplash.com/photo-1566478919030-26d9cadd1a7c?auto=format&fit=crop&w=300&q=80", // Chips
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 20 }, { store: "BigBasket", price: 18 }]
    },
    {
        id: 44,
        name: "Kurkure Masala Munch (90g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Spicy snacks
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 20 }, { store: "BigBasket", price: 18 }]
    },
    {
        id: 45,
        name: "Haldiram's Aloo Bhujia (200g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Bhujia
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }]
    },
    {
        id: 46,
        name: "Parle-G Biscuits (250g)",
        image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80", // Biscuits
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 25 }, { store: "Zepto", price: 24 }, { store: "BigBasket", price: 22 }]
    },
    {
        id: 47,
        name: "Cadbury Dairy Milk Silk (60g)",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", // Chocolate
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 80 }, { store: "Zepto", price: 78 }, { store: "BigBasket", price: 75 }]
    },
    {
        id: 48,
        name: "Oreo Vanilla Creme Biscuits (120g)",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80", // Oreo
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 49,
        name: "Doritos Nacho Cheese (60g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Nachos
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 30 }, { store: "Zepto", price: 28 }, { store: "BigBasket", price: 25 }]
    },
    {
        id: 50,
        name: "Sunfeast Dark Fantasy Choco Fills (75g)",
        image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80", // Cookies
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 40 }, { store: "Zepto", price: 38 }, { store: "BigBasket", price: 35 }]
    },
    {
        id: 51,
        name: "Haldiram's Bhujia Sev (200g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Sev
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }]
    },
    {
        id: 52,
        name: "Pringles Original (107g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Pringles
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 105 }, { store: "BigBasket", price: 100 }]
    },
    {
        id: 53,
        name: "Unibic Choco Chip Cookies (150g)",
        image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80", // Cookies
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 54,
        name: "KitKat (37g)",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", // Chocolate
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 25 }, { store: "Zepto", price: 25 }, { store: "BigBasket", price: 22 }]
    },
    {
        id: 55,
        name: "Bingo Mad Angles (70g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Chips
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 20 }, { store: "BigBasket", price: 18 }]
    },
    {
        id: 56,
        name: "Act II Butter Popcorn (30g)",
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=300&q=80", // Popcorn
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 15 }, { store: "Zepto", price: 14 }, { store: "BigBasket", price: 12 }]
    },
    {
        id: 57,
        name: "Haldiram's Soan Papdi (250g)",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", // Sweet
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 70 }, { store: "Zepto", price: 68 }, { store: "BigBasket", price: 65 }]
    },
    {
        id: 58,
        name: "Bourbon Biscuits (150g)",
        image: "https://images.unsplash.com/photo-1499636138143-bd649025ebeb?auto=format&fit=crop&w=300&q=80", // Biscuits
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 30 }, { store: "Zepto", price: 28 }, { store: "BigBasket", price: 25 }]
    },
    {
        id: 59,
        name: "Snickers Bar (45g)",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80", // Chocolate
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 50 }, { store: "Zepto", price: 48 }, { store: "BigBasket", price: 45 }]
    },
    {
        id: 60,
        name: "Too Yumm! Veggie Stix (60g)",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=300&q=80", // Snacks
        category: "Snacks",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 20 }, { store: "BigBasket", price: 18 }]
    },

    // Beverages (61-75)
    {
        id: 61,
        name: "Brooke Bond Red Label Tea (500g)",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80", // Tea
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 260 }, { store: "Zepto", price: 255 }, { store: "BigBasket", price: 245 }]
    },
    {
        id: 62,
        name: "Coca-Cola (750ml)",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80", // Cola
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 63,
        name: "Nescafe Classic Coffee (50g)",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=300&q=80", // Coffee
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 160 }, { store: "Zepto", price: 155 }, { store: "BigBasket", price: 150 }]
    },
    {
        id: 64,
        name: "Tropicana Mixed Fruit Juice (1L)",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80", // Juice
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 105 }, { store: "BigBasket", price: 100 }]
    },
    {
        id: 65,
        name: "Sprite (750ml)",
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=300&q=80", // Sprite
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 66,
        name: "Tata Tea Premium (500g)",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80", // Tea
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 250 }, { store: "Zepto", price: 245 }, { store: "BigBasket", price: 240 }]
    },
    {
        id: 67,
        name: "Bru Instant Coffee (50g)",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=300&q=80", // Coffee
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 108 }, { store: "BigBasket", price: 105 }]
    },
    {
        id: 68,
        name: "Real Mango Juice (1L)",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80", // Juice
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 105 }, { store: "BigBasket", price: 100 }]
    },
    {
        id: 69,
        name: "Thums Up (750ml)",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80", // Cola
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 70,
        name: "Horlicks Health Drink (500g)",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80", // Health drink
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 260 }, { store: "Zepto", price: 255 }, { store: "BigBasket", price: 250 }]
    },
    {
        id: 71,
        name: "Bournvita (500g)",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80", // Health drink
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 240 }, { store: "Zepto", price: 235 }, { store: "BigBasket", price: 230 }]
    },
    {
        id: 72,
        name: "Limca (750ml)",
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=300&q=80", // Soda
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 45 }, { store: "Zepto", price: 42 }, { store: "BigBasket", price: 40 }]
    },
    {
        id: 73,
        name: "Lipton Green Tea (25 bags)",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=300&q=80", // Tea
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 160 }, { store: "Zepto", price: 155 }, { store: "BigBasket", price: 150 }]
    },
    {
        id: 74,
        name: "Red Bull Energy Drink (250ml)",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80", // Energy drink
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 125 }, { store: "Zepto", price: 120 }, { store: "BigBasket", price: 115 }]
    },
    {
        id: 75,
        name: "Bisleri Mineral Water (1L)",
        image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=300&q=80", // Water
        category: "Beverages",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 20 }, { store: "BigBasket", price: 18 }]
    },

    // Personal Care (76-90)
    {
        id: 76,
        name: "Colgate Strong Teeth Toothpaste (200g)",
        image: "https://images.unsplash.com/photo-1571781926291-28b4687e3eb4?auto=format&fit=crop&w=300&q=80", // Toothpaste
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 108 }, { store: "BigBasket", price: 105 }]
    },
    {
        id: 77,
        name: "Dettol Original Soap (125g)",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=300&q=80", // Soap
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 60 }, { store: "Zepto", price: 58 }, { store: "BigBasket", price: 55 }]
    },
    {
        id: 78,
        name: "Dove Hair Fall Rescue Shampoo (180ml)",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=300&q=80", // Shampoo
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 180 }, { store: "Zepto", price: 175 }, { store: "BigBasket", price: 170 }]
    },
    {
        id: 79,
        name: "Pears Pure & Gentle Soap (125g)",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=300&q=80", // Soap
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }]
    },
    {
        id: 80,
        name: "Nivea Men Face Wash (100g)",
        image: "https://images.unsplash.com/photo-1556228720-1987594b8d40?auto=format&fit=crop&w=300&q=80", // Face wash
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 190 }, { store: "Zepto", price: 185 }, { store: "BigBasket", price: 180 }]
    },
    {
        id: 81,
        name: "Sensodyne Fresh Mint Toothpaste (75g)",
        image: "https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=300&q=80", // Toothpaste
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 140 }, { store: "Zepto", price: 135 }, { store: "BigBasket", price: 130 }]
    },
    {
        id: 82,
        name: "Lifebuoy Total 10 Soap (125g)",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=300&q=80", // Soap
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },
    {
        id: 83,
        name: "Head & Shoulders Shampoo (180ml)",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=300&q=80", // Shampoo
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 170 }, { store: "Zepto", price: 165 }, { store: "BigBasket", price: 160 }]
    },
    {
        id: 84,
        name: "Himalaya Purifying Neem Face Wash (100ml)",
        image: "https://images.unsplash.com/photo-1556228720-1987594b8d40?auto=format&fit=crop&w=300&q=80", // Face wash
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 130 }, { store: "Zepto", price: 125 }, { store: "BigBasket", price: 120 }]
    },
    {
        id: 85,
        name: "Parachute Coconut Oil (200ml)",
        image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=300&q=80", // Hair oil
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 90 }, { store: "Zepto", price: 88 }, { store: "BigBasket", price: 85 }]
    },
    {
        id: 86,
        name: "Vaseline Body Lotion (200ml)",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=300&q=80", // Lotion
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 220 }, { store: "Zepto", price: 210 }, { store: "BigBasket", price: 200 }]
    },
    {
        id: 87,
        name: "Gillette Mach 3 Razor",
        image: "https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=300&q=80", // Razor
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 350 }, { store: "Zepto", price: 340 }, { store: "BigBasket", price: 330 }]
    },
    {
        id: 88,
        name: "Whisper Ultra Clean Pads (15 pads)",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&w=300&q=80", // Pads
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 180 }, { store: "Zepto", price: 175 }, { store: "BigBasket", price: 170 }]
    },
    {
        id: 89,
        name: "Close Up Toothpaste (150g)",
        image: "https://images.unsplash.com/photo-1559586616-361e18714958?auto=format&fit=crop&w=300&q=80", // Toothpaste
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 95 }, { store: "Zepto", price: 92 }, { store: "BigBasket", price: 90 }]
    },
    {
        id: 90,
        name: "Lux Rose Soap (100g)",
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=300&q=80", // Soap
        category: "Personal Care",
        prices: [{ store: "Blinkit", price: 35 }, { store: "Zepto", price: 32 }, { store: "BigBasket", price: 30 }]
    },

    // Household (91-100)
    {
        id: 91,
        name: "Surf Excel Easy Wash Detergent Powder (1kg)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Detergent
        category: "Household",
        prices: [{ store: "Blinkit", price: 135 }, { store: "Zepto", price: 130 }, { store: "BigBasket", price: 128 }]
    },
    {
        id: 92,
        name: "Vim Dishwash Bar (200g)",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80", // Cleaning
        category: "Household",
        prices: [{ store: "Blinkit", price: 20 }, { store: "Zepto", price: 18 }, { store: "BigBasket", price: 15 }]
    },
    {
        id: 93,
        name: "Lizol Floor Cleaner (500ml)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Cleaner
        category: "Household",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 105 }, { store: "BigBasket", price: 100 }]
    },
    {
        id: 94,
        name: "Harpic Toilet Cleaner (500ml)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Cleaner
        category: "Household",
        prices: [{ store: "Blinkit", price: 95 }, { store: "Zepto", price: 92 }, { store: "BigBasket", price: 90 }]
    },
    {
        id: 95,
        name: "Ariel Matic Detergent Powder (1kg)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Detergent
        category: "Household",
        prices: [{ store: "Blinkit", price: 220 }, { store: "Zepto", price: 215 }, { store: "BigBasket", price: 210 }]
    },
    {
        id: 96,
        name: "Pril Dishwash Liquid (425ml)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Dishwash
        category: "Household",
        prices: [{ store: "Blinkit", price: 105 }, { store: "Zepto", price: 100 }, { store: "BigBasket", price: 95 }]
    },
    {
        id: 97,
        name: "Comfort Fabric Conditioner (200ml)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Conditioner
        category: "Household",
        prices: [{ store: "Blinkit", price: 55 }, { store: "Zepto", price: 52 }, { store: "BigBasket", price: 50 }]
    },
    {
        id: 98,
        name: "Odonil Room Freshener (50g)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Freshener
        category: "Household",
        prices: [{ store: "Blinkit", price: 60 }, { store: "Zepto", price: 58 }, { store: "BigBasket", price: 55 }]
    },
    {
        id: 99,
        name: "Scotch-Brite Scrub Pad",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80", // Scrub
        category: "Household",
        prices: [{ store: "Blinkit", price: 15 }, { store: "Zepto", price: 15 }, { store: "BigBasket", price: 12 }]
    },
    {
        id: 100,
        name: "Tide Plus Detergent Powder (1kg)",
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=300&q=80", // Detergent
        category: "Household",
        prices: [{ store: "Blinkit", price: 110 }, { store: "Zepto", price: 105 }, { store: "BigBasket", price: 100 }]
    }
];
