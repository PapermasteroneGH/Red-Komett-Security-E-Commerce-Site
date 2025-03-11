import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect} from 'react';


function Index() {
    
    const currentDate = new Date().getFullYear();

    return(
        <>
            <div id="extra-layer">
            </div>
            <div id="main-container">
                <h1>
                    welcome to
                </h1>
                <p>The Red Komett Security</p>
                <h1>Top performing red team group in the world</h1>
                <p>Ranked 10th out of 730 others in asia</p>
                <button>
                    CHECK OUR CREDIBILITY
                </button>
                <img></img>
            </div>
            <div id="brief-resource-view">
                <p>AWARDS & ACHIEVEMENTS</p>

            </div>
            <div id="testimony">
                <p>
                    OUR CLIENT'S TESTIMONY
                </p>
                <div>
                    <p>
                        I've had the greatest pleasure working with their open source intelligence analysts team<br />
                        truly on a different level.
                    </p>
                    <h1>
                        Alif Kenzie Wibiyoso
                    </h1>
                    <p>
                        a senior frontend developer at Pearson
                    </p>
                </div>
                <div>
                    <p>
                        Best backshots in all the land
                    </p>
                    <h1>
                        Aval Karif
                    </h1>
                    <p>
                        network security specialist at rule34
                    </p>
                </div>
            </div>
            <div id="brief-catalogue-view">
                <div>
                    <img>
                    </img>
                    <p>
                        Explore the depths of the cybersecurity expertise <br />
                        with the softwares built for professionals by professionals 
                    </p>
                    <button onclick="window.open('/Resources', '_blank', 'noopener,noreferrer')">          
                            Take a look at our catalogue
                    </button>
                </div>
                
            </div>
            <div id="faq">

            </div>
            <div id="footer-div">
                <img href="red-zaku-head-andrea-gatti-transparent.png"></img>
                <Link to="/ContactUs">
                    Contact Us
                </Link>
                <Link to="/FeedBack">
                    FeedBacks
                </Link>
                <div id="footer-contacts-list">
                    <img></img>
                </div>
                <p>© {currentDate} Paperworks Community</p>
            </div>
        </>
        
    );
}

export default Index