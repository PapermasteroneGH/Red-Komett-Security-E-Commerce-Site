import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from './pages/index';
import Pricing from './pages/Pricing';
import Resources from './pages/resources';
import FeedBack from "./pages/FeedBack";
import ContactUs from "./pages/ContactUs";
import AttackDBPLP from './pages/Products/AttackDBPLP';
import ThornePLP from './pages/Products/ThornePLP';

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

  function Footer() {

    const currentDate = new Date().getFullYear();

    return(
      <>
        <div id="footer-div">
          <img src="https://cdn3.iconfinder.com/data/icons/gundam-glyph/48/Cartoons__Anime_Gundam_Artboard_2-512.png"></img>
          <Link to="/ContactUs" target="_blank">
                Contact Us
          </Link>
          <Link to="/FeedBack" target="_blank">
                FeedBacks
          </Link>
          <div id="footer-contacts-list">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"></img>
          </div>
          <p>© {currentDate} Paperworks Community</p>      
        </div>
      </>)
    
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
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AttackDBPLP" element={<AttackDBPLP />} />
          <Route path="/ThornePLP.jsx" element={<ThornePLP />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
