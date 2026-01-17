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

const Routing = () => {
  return (
    <>

    <Routes>
        <Route path="/" element={<Navbar/>}>


            <Route path='foryou' element={<Foryou/>}/>
            <Route path='dining' element={<Dining/>}/>
            <Route path='movies' element={<Movies/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='stores' element={<Stores/>}/>
            <Route path='activites' element={<Activites/>} />
            <Route path='play' element={<Play/>}/>



        </Route>

    </Routes>
    
    </>
  )
}

export default Routing