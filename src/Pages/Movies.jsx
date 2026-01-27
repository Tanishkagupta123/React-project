import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="w-full h-[55vh] flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        }}
      >
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

      {/* MOVIES */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Now Showing</h2>
        <p className="text-gray-600 mb-8">
          Choose your favourite movie and enjoy the cinema experience 🍿
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          <div onClick={() => navigate("/book/Pushpa-2")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/pushpa2.jpg" alt="Pushpa 2" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Pushpa 2</h3>
              <p className="text-sm text-gray-600">Action • Drama • Thriller</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Salaar")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/salaar.jpeg" alt="Salaar" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Salaar</h3>
              <p className="text-sm text-gray-600">Action • Crime • Suspense</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Animal")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/animal.jpeg" alt="Animal" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Animal</h3>
              <p className="text-sm text-gray-600">Action • Romance • Drama</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Dhurandhar")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/dhunadar.webp" alt="Dhurandhar" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Dhurandhar</h3>
              <p className="text-sm text-gray-600">Action • Drama • Crime</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Avatar")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/avtar.jpg" alt="Avatar" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Avatar</h3>
              <p className="text-sm text-gray-600">Action • Adventure • Fantasy</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Dunki")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/dunki.webp" alt="Dunki" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Dunki</h3>
              <p className="text-sm text-gray-600">Comedy • Drama • Emotional</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Fighter")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/fighter.avif" alt="Fighter" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Fighter</h3>
              <p className="text-sm text-gray-600">Action • Thriller • Patriotism</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Leo")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/leo.webp" alt="Leo" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Leo</h3>
              <p className="text-sm text-gray-600">Action • Crime • Thriller</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Kalki-2898-AD")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/kalki.webp" alt="Kalki 2898 AD" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Kalki 2898 AD</h3>
              <p className="text-sm text-gray-600">Sci-Fi • Action • Mythology</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Brahmastra")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/bramstra.jpg" alt="Brahmastra" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Brahmastra</h3>
              <p className="text-sm text-gray-600">Fantasy • Adventure • Action</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/KGF-Chapter-2")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/kgf.jpg" alt="KGF Chapter 2" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">KGF Chapter 2</h3>
              <p className="text-sm text-gray-600">Action • Thriller • Drama</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/RRR")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/rrr.webp" alt="RRR" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">RRR</h3>
              <p className="text-sm text-gray-600">Action • Drama • History</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Pathaan")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/pathan.jpg" alt="Pathaan" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Pathaan</h3>
              <p className="text-sm text-gray-600">Action • Spy • Thriller</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Jawan")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/jawan.jpg" alt="Jawan" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Jawan</h3>
              <p className="text-sm text-gray-600">Action • Thriller • Drama</p>
            </div>
          </div>

          <div onClick={() => navigate("/book/Baahubali-2")} className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="w-full h-75 overflow-hidden rounded-t-xl bg-gray-100">
              <img src="/bahubali 2.jpg" alt="Baahubali 2" className="w-full h-full object-cover"/>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900">Baahubali 2</h3>
              <p className="text-sm text-gray-600">Action • Epic • Drama</p>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-gray-300 text-center py-6">
        © 2026 MovieBook • Fast • Easy • Secure Ticket Booking
      </div>
    </div>
  );
};

export default Home;
