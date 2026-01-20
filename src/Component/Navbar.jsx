import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

     <div className='w-full h-20 border-b bg-white shadow-sm'>
  <header className="w-full h-full">
    <nav className="w-full h-full flex items-center px-6">
      
      {/* LEFT LOGO */}
      <div className="flex-shrink-0">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent
          hover:scale-110 transition-transform duration-300"
        >
          CINEORA
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
