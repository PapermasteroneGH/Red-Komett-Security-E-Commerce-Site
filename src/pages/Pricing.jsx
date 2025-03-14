import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect} from 'react';

function Pricing() {



    return(
        <>
            <div className="pricing-div">
                <div>
                    <p>
                        Team Service
                    </p>
                    <div>
                        <p>
                            Penetration Testers
                        </p>
                        <p>
                            Digital Forensics
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        Product Service
                    </p>
                    <div>
                        <p>
                            <Link to="/AttackDBPLP">
                                Attack Dashboard
                            </Link>
                        </p>
                        <p>
                            <Link to="/ThornePLP">
                                Thorne 
                            </Link>
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Pricing