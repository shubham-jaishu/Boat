import React from 'react'
import logo1 from '../img/hero5/1.svg'
import logo2 from '../img/hero5/2.svg'
import logo3 from '../img/hero5/3.svg'
import logo4 from '../img/hero5/4.svg'

function Hero5() {
  return (
    <div className='hero5'>
      <div className="container">
        <div className="b"><img src={logo1} alt="svg" /></div>
        <div className="b"><img src={logo2} alt="svg" /></div>
        <div className="b"><img src={logo3} alt="svg" /></div>
        <div className="b"><img src={logo4} alt="svg" /></div>
      </div>
      <div className="detail">
        <h1 id='b1'><span>1 year </span>Warranty</h1>
        <h1 id='b2'><span>7-day </span>Replacement</h1>
        <h1 id='b3'><span>Free </span>Shipping</h1>
        <h2 id='b4'><span>GST </span>Billing</h2>
      </div>
    </div>
  )
}

export default Hero5
