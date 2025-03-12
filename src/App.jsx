import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from './pages/index';
import Pricing from './pages/Pricing';
import Resources from './pages/resources';
import FeedBack from "./pages/FeedBack";
import ContactUs from "./pages/ContactUs";
import AttackDBPLP from './pages/Products/AttackDBPLP';

function App() {

    function Navbar() {

      function handleBackground() {
        const theNavbar = document.getElementsByClassName('theFuckingnavBar')
        
      }

      return(
          <>
              <nav>
                <ul className="theFuckingnavBar">

                    <Link to="/">Home</Link>

                    <Link to="/Pricing" onClick={handleBackground}>Pricing</Link>

                    <Link to="/Resources">Resources</Link>

                </ul>
              </nav>
          </>
      )
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route Path="/ContactUs" element={<ContactUs />} />
          <Route Path="/AttackDBPLP" element={<AttackDBPLP />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
