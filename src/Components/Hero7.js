import React from 'react'
import logo1 from '../img/hero7/11.png'
import logo2 from '../img/hero7/12.png'
import logo3 from '../img/hero7/13.png'
import logo4 from '../img/hero7/14.png'
import logo5 from '../img/hero7/15.png'

function Hero7() {
    const arr = [
        {
            id: 1,
            vid: `${require("../img/hero7/1.mp4")}`
        },
        {
            id: 2,
            vid: `${require("../img/hero7/2.mp4")}`
        },
        {
            id: 3,
            vid: `${require("../img/hero7/3.mp4")}`
        },
        {
            id: 4,
            vid: `${require("../img/hero7/4.mp4")}`
        },
        {
            id: 5,
            vid: `${require("../img/hero7/5.mp4")}`
        }
    ]
    return (
        <div className="hero7">
            <div className="top">
                <h1>Join the <span>Tribe</span></h1>
            </div>
            <div className="main">
            {
                arr.map((item) => {
                    return (
                        <div key={item.id} className="b">
                            <video src={item.vid} autoPlay="true" muted="true"></video>
                        </div>
                    )
                })
            }
            </div>
            <div className="icon">
                <div className="logoo"><img src={logo1} alt="png" /></div>
                <div className="logoo"><img src={logo2} alt="png" /></div>
                <div className="logoo"><img src={logo3} alt="png" /></div>
                <div className="logoo"><img src={logo4} alt="png" /></div>
                <div className="logoo"><img src={logo5} alt="png" /></div>
            </div>
            <div className="box">
                <div className="b">
                    <div className="up">
                        <h2>Storm Call 2</h2>
                    </div>
                    <div className="down">
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 999</p>
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 2,499</p>
                        <p>60% off</p>
                    </div>
                </div>
                <div className="b">
                    <div className="up">
                        <h2>Storm Call 2</h2>
                    </div>
                    <div className="down">
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 999</p>
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 2,499</p>
                        <p>60% off</p>
                    </div>
                </div>
                <div className="b">
                    <div className="up">
                        <h2>Storm Call 2</h2>
                    </div>
                    <div className="down">
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 999</p>
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 2,499</p>
                        <p>60% off</p>
                    </div>
                </div>
                <div className="b">
                    <div className="up">
                        <h2>Storm Call 2</h2>
                    </div>
                    <div className="down">
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 999</p>
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 2,499</p>
                        <p>60% off</p>
                    </div>
                </div>
                <div className="b">
                    <div className="up">
                        <h2>Storm Call 2</h2>
                    </div>
                    <div className="down">
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 999</p>
                        <p><i class="fa-solid fa-indian-rupee-sign"></i> 2,499</p>
                        <p>60% off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero7