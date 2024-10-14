import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import Features from './Components/Features/Features'
import Pricing from './Components/Pricing/Pricing'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <div id="services">
      <Service/>
      </div>
      <div id="features">
      <Features/>
      </div>
      <div id="pricing">
      <Pricing/>
      </div>
      <div id="about">
      <AboutUs/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
