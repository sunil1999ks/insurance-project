import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import Dashboard from './layouts/Dashboard'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard/*' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App
