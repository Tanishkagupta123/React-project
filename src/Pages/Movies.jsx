import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">

    <div
  className="w-full h-[55vh] flex items-center justify-center relative bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
  }}>
  
  <div className="absolute inset-0 bg-black/60"></div>


  <div className="relative text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-3">
      Your Movie Night Starts Here 🎬
    </h1>
    <p className="text-lg text-gray-200 mb-6">
      Book tickets for the latest movies easily & quickly
    </p>
    <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-lg font-semibold">
      Book Tickets
    </button>
  </div>
</div>


      {/* movies */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          Now Showing
        </h2>
        <p className="text-gray-600 mb-8">
          Choose your favourite movie and enjoy the cinema experience 🍿
        </p>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {/* MOVIE 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-100 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <img
                src="/pushpa2.jpg"
                alt="Pushpa 2"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">
                Pushpa 2
              </h3>
              <p className="text-sm text-gray-600">
                Action • Drama • Thriller
              </p>
            </div>
          </div>

          {/* MOVIE 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-100 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <img
                src="/salaar.jpeg"
                alt="Salaar"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">
                Salaar
              </h3>
              <p className="text-sm text-gray-600">
                Action • Crime • Suspense
              </p>
            </div>
          </div>

          {/* MOVIE 3 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-100 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <img
                src="/animal.jpeg"
                alt="Animal"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">
                Animal
              </h3>
              <p className="text-sm text-gray-600">
                Action • Romance • Drama
              </p>
            </div>
          </div>

          {/* MOVIE 4 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-100 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <img
                src="/dhunadar.webp"
                alt="Dhurandar"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">
                Dhurandhar
              </h3>
              <p className="text-sm text-gray-600">
                Action • Drama • Crime
              </p>
            </div>
          </div>

          {/* MOVIE 5 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-100 bg-gray-100 flex items-center justify-center rounded-t-xl">
              <img
                src="/avtar.jpg"
                alt="Salaar"
                className="max-h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">
                Avatar
              </h3>
              <p className="text-sm text-gray-600">
                Action • Adventure • Fantasy
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <div className="bg-gray-900 text-gray-300 text-center py-6">
        © 2026 MovieBook • Fast • Easy • Secure Ticket Booking
      </div>

    </div>
  );
};

export default Home;
