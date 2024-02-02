import React from 'react'
import logo1 from "../img/hero9/1.png"
import logo2 from "../img/hero9/2.jpeg"

function Hero9() {
    return (
        <div className="hero9">
            <div className="top">
                <h1>In the <span>Press</span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={logo1} alt="png" />
                </div>
                <div className="right">
                    <img src={logo2} alt="jpeg" />
                </div>
            </div>
        </div>
    )
}

export default Hero9