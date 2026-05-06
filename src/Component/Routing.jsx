import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Dining from '../Pages/Dining'
import Events from '../Pages/Events'
import Movies from '../Pages/Movies'
import Stores from '../Pages/Stores'
import Signup from '../Main pages/Signup'
import Login from '../Main pages/Login'
import Bookticket from "../Pages/Bookticket"
import SeatLayout from "../Pages/SeatLayout"
import MyBookings from '../Pages/Mybookings'

const Routing = () => {
  return (
    <Routes>

      {/* Layout Route */}
      <Route path="/" element={<Navbar />}>

        <Route index element={<Movies />} />

        <Route path="dining" element={<Dining />} />
        <Route path="movies" element={<Movies />} />
        <Route path="events" element={<Events />} />
        <Route path="stores" element={<Stores />} />

        {/* Dynamic Routes */}
        <Route path="book/:movieName" element={<Bookticket />} />
        <Route path="seats/:movie/:cinema/:time" element={<SeatLayout />} />
        <Route path="mybookings" element={<MyBookings />} />

      </Route>

      {/* Auth Routes */}
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />

    </Routes>
  )
}

export default Routing