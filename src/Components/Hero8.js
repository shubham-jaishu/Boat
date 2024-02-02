import React from 'react'
import logo1 from "../img/hero8/1.jpg"
import logo2 from "../img/hero8/2.jpg"
import logo3 from "../img/hero8/3.png"
import logo4 from "../img/hero8/4.jpg"

function Hero8() {
    return (
        <div className="hero8">
            <div className="top">
                <h1><span>Blogs</span></h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
            <div className="main">
                <div className="b">
                    <img src={logo1} alt="jpg" />
                    <div className="down">
                        <h2>23 Sep, 2023</h2>
                        <h1>The Power of Personalisation: Custom Watch Faces in Wearables</h1>
                        <p>Check out how with our DIY Watch Face Studio and customisable watch faces are...</p>
                        <button>Read More <i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
                <div className="b">
                    <img src={logo2} alt="jpg" />
                    <div className="down">
                        <h2>01 Nov, 2021</h2>
                        <h1>What is Active Noise Cancellation and Why is it Important?</h1>
                        <p>Admit it, boAt fam: There’s no greater vibe killer than outside noise leaking into your blissful,...</p>
                        <button>Read More <i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
                <div className="b">
                    <img src={logo3} alt="png" />
                    <div className="down">
                        <h2>30 Nov, 2022</h2>
                        <h1>Aman Gupta boAt (Shark Tank India 2) Age, Net worth, Email ID,...</h1>
                        <p>We know you keep searching for things on the internet — after all, what better source is there...</p>
                        <button>Read More <i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
                <div className="b">
                    <img src={logo4} alt="jpg" />
                    <div className="down">
                        <h2>24 Sep, 2023</h2>
                        <h1>One watch, different looks: Match your watch face with your outfit</h1>
                        <p>Check out how with our DIY Watch Face Studio and customisable watch faces are...</p>
                        <button>Read More <i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero8