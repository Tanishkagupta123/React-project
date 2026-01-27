import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Foryou from '../Pages/Foryou'
import Dining from '../Pages/Dining'
import Events from '../Pages/Events'
import Movies from '../Pages/Movies'
import Stores from '../Pages/Stores'
import Play from '../Pages/Play'
import Activites from '../Pages/Activites'
import Signup from '../Main pages/Signup'
import Login from '../Main pages/Login'
import Bookticket from "../Pages/Bookticket";
 import SeatLayout from "../Pages/SeatLayout";





const Routing = () => {
  return (
    <>

    <Routes>
        <Route path="/" element={<Navbar/>}>

        <Route index element={<Movies/>}/>


            <Route path='foryou' element={<Foryou/>}/>
            <Route path='dining' element={<Dining/>}/>
            <Route path='movies' element={<Movies/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='stores' element={<Stores/>}/>
            <Route path='activities' element={<Activites/>} />
            <Route path='play' element={<Play/>}/>
            <Route path="book/:movieName" element={<Bookticket />} />
            <Route path="/seats/:movieName/:time" element={<SeatLayout />} />



        </Route>

        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>


    </Routes>
    
    </>
  )
}

export default Routing
