import React, { useEffect } from 'react'
import logo from '../img/count/1.jpg'

function Countdown() {
   const Clock=()=>{
    let hrs = document.querySelector('#hrs');
    let min = document.querySelector('#min');
    let sec = document.querySelector('#sec');
    setInterval(() =>{
        let curr = new Date();
        hrs.innerHTML = (curr.getHours()<10?"0":"")+curr.getHours();
        min.innerHTML = (curr.getMinutes()<10?"0":"")+curr.getMinutes();
        sec.innerHTML = (curr.getSeconds()<10?"0":"")+curr.getSeconds();
    },500);
   }
   useEffect(()=>{
    let C=Clock();
    return ()=>{
        clearInterval(C)
    }
   },[])
  return (
    <div className='count'>
        <div className="top">
            <h1>Today's Killer <span>Offers</span></h1>
            <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
        </div>
        <div className="pic">
            <img src={logo} alt="jpg" />
        </div>
        <div className="hero">
            <p></p>
            <h3>Started </h3>
            <div className="clock">
                <span id='hrs'>00</span>
                <span> Hours  :  </span>
                <span id='min'>00</span>
                <span> Mins  :  </span>
                <span id='sec'>00</span>
                <span> Sec</span>
            </div>
        </div>
    </div>
  )
}

export default Countdown
