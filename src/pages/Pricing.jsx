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
                        <div>
                            <p>
                                Penetration Testers
                            </p>
                            <p>
                                Under ethical protocols we will assert dominance over whatever
                            </p>
                        </div>
                        <div>
                            <p>
                                Digital Forensics
                            </p>
                            <p>
                                We will provide you with our best forensics investigators to assist
                                with any informative needs  
                            </p>
                        </div>
                        <div>
                            <p>
                                Software Development Support
                            </p>
                            <p>
                                Certified professionals with a range of mastery throughout multiple
                                demands in the software developmental industry.
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        Product Service
                    </p>
                    <div>
                        <div>
                            <p>
                                <Link to="/AttackDBPLP">
                                    Attack Dashboard
                                </Link>
                            </p>
                            <p>
                                All in one open source intelligence software
                                with a very intuitive user interface and is operatable
                                through multiple mediums
                            </p>
                        </div>
                        
                        <div>
                            <p>
                                <Link to="/ThornePLP">
                                    Thorne 
                                </Link>
                            </p>
                            <p>
                                a multi-functional personal AI companion that takes personal
                                data to take personal measures against your personal needs.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Pricing