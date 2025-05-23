import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import InsuranceServices from '../components/InsuranceServices'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <InsuranceServices/>
      <Footer/>
    </div>
  )
}

export default Homepage
