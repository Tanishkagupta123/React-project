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
    { name: "Necklace", category: "Accessories", image: "/acc1.jpg" },
    { name: "Earrings", category: "Accessories", image: "/acc2.jpg" },
    { name: "Bracelet", category: "Accessories", image: "/acc3.jpg" },
    { name: "Sunglasses", category: "Accessories", image: "/acc4.jpg" },
    { name: "Watch", category: "Accessories", image: "/acc5.jpg" },

    // Beauty
    { name: "Face Cream", category: "Beauty", image: "/beauty1.jpg" },
    { name: "Lipstick", category: "Beauty", image: "/beauty2.jpg" },
    { name: "Perfume", category: "Beauty", image: "/beauty3.jpg" },
    { name: "Shampoo", category: "Beauty", image: "/beauty4.jpg" },
    { name: "Conditioner", category: "Beauty", image: "/beauty5.jpg" },

    // Salon & Wellness
    { name: "Spa Package", category: "Salon & Wellness", image: "/spa.jpg" },
    { name: "Hair Cut", category: "Salon & Wellness", image: "/hair.webp" },
    { name: "Massage", category: "Salon & Wellness", image: "/massage.jpg" },
    { name: "Manicure", category: "Salon & Wellness", image: "/mani.avif" },
    { name: "Pedicure", category: "Salon & Wellness", image: "/padii.jpg" },
  ];

  // Selected category
  const [selectedCategory, setSelectedCategory] = useState("All Stores");

  // Products for selected category
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
            className={`w-40 p-4 text-center rounded-xl cursor-pointer hover:shadow-lg ${
              selectedCategory === cat.name ? "border-2 border-purple-500" : "bg-gray-100"
            }`}
          >
            <img
              src={cat.image}
              className="w-24 h-24 mx-auto rounded-xl object-cover"
            />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Products */}
      <h3 className="text-2xl font-bold mb-4">{selectedCategory} Items</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
          >
            <img
              src={p.image}
              className="w-full h-48 object-cover rounded-xl"
            />
            <p className="mt-2 text-center font-medium">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
