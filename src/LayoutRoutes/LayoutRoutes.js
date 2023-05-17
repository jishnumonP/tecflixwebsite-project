import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Pages/Home'
import About from '../components/Pages/AboutUs/About'
import Plans from '../components/Pages/Content/Plans/Plans'
import Courses from '../components/Pages/Content/Courses/Courses'
import ContactUs from '../components/Pages/ContactUs/ContactUs'
import Support from '../components/Pages/Support/Support'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function LayoutRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default LayoutRoutes