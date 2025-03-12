import AttackDBPLP from "./Products/AttackDBPLP"

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
                              
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Pricing