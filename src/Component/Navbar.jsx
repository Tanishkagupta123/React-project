import React from 'react'
import {Link, Outlet } from 'react-router-dom'



const Navbar = () => {
  return (
   <>
   this is Layout

   <div className=' w-full h-20 border-2 flex flex-col items-center justify-center ' >
    <header>
        <nav>
            <ul className='flex gap-4'>


                
                <li><Link to="/foryou">For you</Link></li>
                <li><Link to="/dining">Dining</Link> </li>
                <li><Link to="/movies">Movies</Link> </li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/stores">Stores</Link></li>
                <li><Link to="/activites">Activites</Link></li>
                <li><Link to="/play">Play</Link></li>

                <li><Link to="/signup">Signup/</Link></li>
                <li><Link to="/login">Login</Link></li>


            </ul>


        </nav>

    </header>



<Outlet/>


   </div>
   
   
   
   
   </>
  )
}

export default Navbar