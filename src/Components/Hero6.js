import React from 'react'
import logo1 from '../img/hero6/1.png'
import logo2 from '../img/hero6/2.png'
import logo3 from '../img/hero6/3.png'
import logo4 from '../img/hero6/4.png'
import logo5 from '../img/hero6/5.png'

function Hero6() {
  return (
    <div className='hero6'>
        <div className="top">
            <h1>Shop by <span>Lifestyle</span></h1>
        </div>
        <div className="boxes">
            <div className="b"><img src={logo1} alt="png" /></div>
            <div className="b"><img src={logo2} alt="png" /></div>
            <div className="b"><img src={logo3} alt="png" /></div>
            <div className="b"><img src={logo4} alt="png" /></div>
            <div className="b"><img src={logo5} alt="png" /></div>
        </div>
        <div className="txt">
            <div className="detail">
                <h1>For Fitness</h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
            <div className="detail">
                <h1>For Fitness</h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
            <div className="detail">
                <h1>For Fitness</h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
            <div className="detail">
                <h1>For Fitness</h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
            <div className="detail">
                <h1>For Fitness</h1>
                <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
            </div>
        </div>
    </div>
  )
}

export default Hero6
