import React, { useEffect, useState } from 'react'
import logo from '../img/logo/boat.svg'
import logo1 from "../img/header/1.png"
import logo2 from "../img/header/2.jpeg"

function Header() {
  const [search_data,setsearch_data]=useState("")
  const arr = ["Speaker", "Smart Watch", "Neck Band", "Ear Phone"]
  const searchAnimation = ()=>{
    const srch_arr=document.getElementById("srch_arr")
    let i=0;
    srch_arr.innerText="Search " + arr[i];
    i++;
    if(i>=4) i=0;

  }
  
  const srch_hide_1=()=>{
    const srch_arr=document.getElementById("srch_arr")
    srch_arr.style.display="none";
    const inpt=document.getElementById("inpt")
    inpt.focus()
      
  }
  const srch_hide=(search_data)=>{
    const srch_arr=document.getElementById("srch_arr")
    if(search_data===""){
      srch_arr.style.display="block";
    }
    else{
      srch_arr.style.display="none";
    }
      
  }
  useEffect(()=>{
    let a=srch_hide();
    let b=searchAnimation()
    return ()=>{
      clearInterval(a);
      clearInterval(b)
    }
  })
  return (
    <div className='header'>
      <div className="top">
      <p class="">Catch the KILLER—Deals on <b>best of boAt</b>! Shop now &amp; <b>earn 5% boAt Rewards</b>.</p>
      </div>
      <div className="bottom">
        <div className="L">
            <div className="left">
                <img src={logo} alt="svg" />
            </div>
            <div className="right">
              <ul>
                <li>Categories <i class="fa-solid fa-chevron-down"></i></li>
                <li>Daily Deals</li>
                <li>Gift with boAt</li>
                <li>Corporate Orders</li>
                <li>More <i class="fa-solid fa-chevron-down"></i></li>
              </ul>
            </div>
        </div>
        <div className="R">
          <div className="search" >
            <p id='srch_arr' onClick={srch_hide_1} className='para'></p>
            <input type="text" onChange={(e)=>{setsearch_data(e.target.value)}} id='inpt'></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="srch">
            <img src={logo1} alt="png" />
            <img src={logo2} alt="jpeg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
