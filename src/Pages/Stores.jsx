import React, { useState } from "react";

const Stores = () => {
  // Categories
  const categories = [
    { name: "All Stores", image: "/all.jpg" },
    { name: "Salon & Wellness", image: "/saloon.jpg" },
    { name: "Apparel", image: "/wear.webp" },
    { name: "Accessories", image: "/accer.avif" },
    { name: "Beauty", image: "/beauty.jpg" },
  ];

  const products = [
    // Apparel
    { name: "Lehenga Set", category: "Apparel", image: "/lehnga.jpg" },
    { name: "Kurti", category: "Apparel", image: "/kurti.webp" },
    { name: "Saree", category: "Apparel", image: "/saree.jpg" },
    { name: "Jeans", category: "Apparel", image: "/jeans.jpg" },
    { name: "Shirt", category: "Apparel", image: "/shirt.jpg" },
    { name: "Jacket", category: "Apparel", image: "/jacket.webp" },

    // Accessories
    { name: "Necklace", category: "Accessories", image: "/neck.webp" },
    { name: "Earrings", category: "Accessories", image: "/ear.jpg" },
    { name: "Bracelet", category: "Accessories", image: "/hand.webp" },
    { name: "Sunglasses", category: "Accessories", image: "/sun.jpg" },
    { name: "Watch", category: "Accessories", image: "/watch.webp" },

    // Beauty
    { name: "Face Cream", category: "Beauty", image: "/cream.webp" },
    { name: "Lipstick", category: "Beauty", image: "/lips.jpg" },
    { name: "Perfume", category: "Beauty", image: "/perfume.jpg" },
    { name: "Foundation", category: "Beauty", image: "/foundation.webp" },
    { name: "Liner & Mascara", category: "Beauty", image: "/liner.jpg" },

    // Salon & Wellness
    { name: "Spa Package", category: "Salon & Wellness", image: "/spa.jpg" },
    { name: "Hair Cut", category: "Salon & Wellness", image: "/hair.webp" },
    { name: "Massage", category: "Salon & Wellness", image: "/massage.jpg" },
    { name: "Manicure", category: "Salon & Wellness", image: "/mani.avif" },
    { name: "Pedicure", category: "Salon & Wellness", image: "/padii.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Stores");

  const filteredProducts =
    selectedCategory === "All Stores"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="px-8 py-10">
      {/* Categories */}
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

      <div className="flex gap-4 flex-wrap mb-10">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setSelectedCategory(cat.name)}
            className={`w-40 p-4 text-center rounded-xl cursor-pointer transition ${
              selectedCategory === cat.name
                ? "border-2 border-purple-500 shadow-md"
                : "bg-gray-100 hover:shadow-lg"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 mx-auto rounded-xl object-contain bg-white p-2"
            />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Products */}
      <h3 className="text-2xl font-bold mb-4">
        {selectedCategory} Items
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="w-full h-52 bg-gray-100 rounded-xl flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>
            <p className="mt-3 text-center font-medium">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
