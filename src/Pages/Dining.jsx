import React from "react";

const Dining = () => {
  return (
    <div className="w-full min-h-screen bg-purple-50 py-10">

      <h1 className="text-4xl font-bold text-center">
        Discover Amazing Dining Deals 🍽️
      </h1>

      <div className="w-40 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>

  
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Box 1 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Special Meal Combos</h2>
          <p className="text-gray-600 mt-2">
            Best food combos from top restaurants near you
          </p>

          <div className="mt-6 flex justify-center">
            <div className="bg-purple-200 p-3 shadow-lg -rotate-6">
              <img
                src="/meals.webp"
                alt="Dining 1"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Instant Table Booking</h2>
          <p className="text-gray-600 mt-2">
            Reserve your seat quickly without waiting in line
          </p>

          <div className="mt-6 flex justify-center">
            <div className="bg-purple-200 p-3 shadow-lg rotate-3">
              <img
                src="/faimly.avif"
                alt="Dining 2"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Free Dessert Offers</h2>
          <p className="text-gray-600 mt-2">
            Get sweet treats and extra discounts with your order
          </p>

          <div className="mt-6 flex justify-center">
            <div className="bg-purple-200 p-3 shadow-lg -rotate-2">
              <img
                src="/desert.jpg"
                alt="Dining 3"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

       <div className="w-full bg-white mt-16 py-14">
      <h2 className="text-3xl font-bold text-center mt-14">
        Grab Your Food Offers & Save More 💜
      </h2>

      <div className="w-40 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
     
      
        <div className="max-w-6xl mx-auto px-4 mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Deal 1 Text */}

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Up to 50% OFF</h2>
            <p className="text-gray-600 mt-2">
              Save big on your dining bill with exciting offers
            </p>
          </div>

          {/* Deal 1 Image */}
          <div className="flex justify-center">
            <div className="bg-purple-200 p-3 shadow-lg -rotate-6">
              <img
                src="/off.png"
                alt="Deal 1"
                className="w-72 h-52 object-cover"
              />
            </div>
          </div>

          {/* Deal 2 Text */}
          <div className="text-center md:text-left md:order-4">
            <h2 className="text-3xl font-bold">Buffet Specials</h2>
            <p className="text-gray-600 mt-2">
              Eat more, pay less with buffet offers near you
            </p>
          </div>

          {/* Deal 2 Image */}
          <div className="flex justify-center md:order-3">
            <div className="bg-purple-200 p-3 shadow-lg rotate-3">
              <img
                src="/buffet.webp"
                alt="Deal 2"
                className="w-72 h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Dining;
