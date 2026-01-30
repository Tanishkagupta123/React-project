import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="w-full h-[80vh] flex items-center justify-center relative bg-cover bg-center"
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
          {/* <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-lg font-semibold">
            Book Tickets
          </button> */}
        </div>
      </div>

      {/* newww */}

<Swiper
  modules={[Autoplay, Pagination]}
  slidesPerView={1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ type: "progressbar" }}
>
  {/* SLIDE 1 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        <div className="md:pl-10 pl-4">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Dhurandhar
          </h1> <br />

          <p className="text-lg text-gray-500 mb-2">
            UA13+ • Action • Drama
          </p>

          {/* <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold
            hover:bg-gray-800 hover:scale-105 transition">
            Book Now 🎟️
          </button> */}
        </div>

        <div className="flex justify-end">
          <img
            src="/dhunadar.webp"
            className="w-[380px] rounded-2xl shadow-2xl hover:scale-105 transition"
          />
        </div>
      </div>
    </div>
  </SwiperSlide>

 {/* SLIDE 2 */}
<SwiperSlide>
  <div className="bg-gradient-to-r from-white to-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* LEFT CONTENT */}
      <div className="md:pl-12 pl-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Baahubali 2
        </h1> <br />

        <p className="text-lg text-gray-500 mb-2">
        Action • Epic • Dramar
        </p>

        {/* <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold
          hover:bg-gray-800 hover:scale-105 transition">
          Book Now 🎟️
        </button> */}
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-end">
        <img
          src="/bahubali 2.jpg"
          className="w-[340px] rounded-2xl shadow-2xl hover:scale-105 transition"
        />
      </div>
    </div>
  </div>
</SwiperSlide>

{/* SLIDE 3 */}
<SwiperSlide>
  <div className="bg-gradient-to-r from-white to-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* LEFT CONTENT */}
      <div className="md:pl-12 pl-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Brahmastra
        </h1> <br />

        <p className="text-lg text-gray-500 mb-2">
         Fantasy • Adventure • Action
        </p>

        {/* <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold
          hover:bg-gray-800 hover:scale-105 transition">
          Book Now 🎟️
        </button> */}
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-end">
        <img
          src="/bramstra.jpg"
          className="w-[380px] rounded-2xl shadow-2xl hover:scale-105 transition"
        />
      </div>
    </div>
  </div>
</SwiperSlide>

</Swiper>


    {/* newww */}


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

<div className="bg-[#0f0f0f] text-gray-300 mt-20">
  
  
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">


    <div>
      <h2 className="text-3xl font-bold text-white mb-3">Flickster</h2>
      <p className="text-sm text-gray-400 leading-relaxed">
        Your one-stop destination for movies, events and unforgettable
        experiences. Book tickets fast, safe & hassle-free 🎬🍿
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-white cursor-pointer">Movies</li>
        <li className="hover:text-white cursor-pointer">Events</li>
        <li className="hover:text-white cursor-pointer">Activities</li>
        <li className="hover:text-white cursor-pointer">Offers</li>
      </ul>
    </div>

    {/* SUPPORT */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
      </ul>
    </div>

  </div>

  {/* DIVIDER */}
  <div className="border-t border-gray-700"></div>

  {/* BOTTOM */}
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
    <p>
      © 2026 <span className="text-white font-medium">Flekster</span>.  
      All rights reserved.
    </p>

    <p className="text-gray-500">
      Made with ❤️ for movie lovers
    </p>
  </div>

</div>


      
    </div>


  );
};

export default Home;
