import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

     <div className='w-full h-20 border-b bg-white shadow-sm'>
  <header className="w-full h-full">
    <nav className="w-full h-full flex items-center px-6">
      <div className="flex-shrink-0 flex items-center">
  <div className="w-18 h-18 rounded-full overflow-hidden 
                  flex items-center justify-center
                  bg-gradient-to-r from-purple-500 to-pink-500">
    <img
      src="/flip.png"
      alt="Flickster Logo"
      className="w-full h-full object-cover scale-105 
                 hover:scale-140 transition-transform duration-300"
    />
  </div>

  <Link
    to="/"
    className="ml-3 text-3xl font-extrabold
               bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500
               bg-clip-text text-transparent
               hover:scale-105 transition-transform duration-300"
  >
    Flickster
  </Link>
</div>



      <ul className="flex-1 flex justify-center gap-6 items-center text-xl font-medium text-gray-700">
        <li className="hover:text-indigo-600 transition">
          <Link to="/foryou">For you</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/dining">Dining</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/events">Events</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/stores">Stores</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/activities">Activities</Link>
        </li>
        <li className="hover:text-indigo-600 transition">
          <Link to="/play">Play</Link>
        </li>
      </ul>

    
      <ul className="flex gap-4 items-center ml-auto">
        <li>
          <Link
            to="/signup"
            className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            Signup
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </li>
      </ul>

    </nav>
  </header>

  <Outlet />
</div>

    </>
  )
}

export default Navbar
