import React  from 'react'
// import video from '../img/hero1/1.mp4'

function Hero1() {
    const videoplay = (id) => {
        const V = document.getElementsByClassName("b")[id].children[1]
        V.muted = true;
        V.play();
    }
    const videopause = (id) => {
        const V = document.getElementsByClassName("b")[id].children[1]
        setTimeout(()=>{
            V.pause();
        },500);
    }
    const arr = [
        {
            id:1,
            vid:`${require("../img/hero1/1.mp4")}`
        },
        {
            id:2,
            vid:`${require("../img/hero1/2.mp4")}`
        },
        {
            id:3,
            vid:`${require("../img/hero1/3.mp4")}`
        },
        {
            id:4,
            vid:`${require("../img/hero1/4.mp4")}`
        },
        {
            id:5,
            vid:`${require("../img/hero1/5.mp4")}`
        },
    ]
    return (
        <div className='hero1'>
            <h1>Explore <span>Bestseller</span></h1>
            <div className="boxes">
                {
                    arr.map((item)=>{
                        return (
                        <div key={item.id} className="b">
                            <video src={item.vid} autoplay="true" onMouseOver={()=>{videoplay(item.id - 1)}} onMouseOut={()=>{videopause(item.id - 1)}}></video>
                        </div>
                        )
                    })
                }
            </div>
            <div className="para">
                <ul>
                    <li>Smartwatches</li>
                    <li>Wireless Speakers</li>
                    <li>Headphones</li>
                    <li>Neckbands</li>
                    <li>Wireless Earbuds</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero1
