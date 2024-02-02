import React, { useEffect, useState } from 'react'

function Slider() {
    const [imgid,setimgid] = useState(1)
    const [flag,setflag]=useState(1)
    const arr = [
        {
            id:1,
            img:`${require("../img/slide/1.jpg")}`
        },
        {
            id:2,
            img:`${require("../img/slide/2.jpg")}`
        },
        {
            id:3,
            img:`${require("../img/slide/3.jpg")}`
        },
        {
            id:4,
            img:`${require("../img/slide/4.jpg")}`
        },
        {
            id:5,
            img:`${require("../img/slide/5.jpg")}`
        },
        {
            id:6,
            img:`${require("../img/slide/6.png")}`
        }
    ]
    const moveright = ()=>{
        setflag(1)
        setimgid(imgid+1);
        if(imgid===6) setimgid(1);
    }
    const moveleft = ()=>{
        setflag(0)
        if(imgid-1===0) setimgid(6);
        else setimgid(imgid-1);
    }
    const active = ()=>{
        const mini_box = document.querySelectorAll(".container")[0].children;
        if(imgid>=0 && imgid<=6) mini_box[imgid-1].className+=" active";
        for (let i=0; i<6; i++){
            if(imgid-1!==i)  mini_box[i].className="c";
        }
    }
    useEffect(()=>{
        let a = active();
        return ()=>{
            clearInterval(a);
        }
    },)
  return (
    <div className='slider'>
      <i class="fa-solid fa-circle-chevron-left" onClick={moveleft}></i>
      {
        arr.map((item)=>{
            return(
                <div className={(flag===0)?'slid Left':'slid Right'}>
                    {(imgid===item.id) && <img src={item.img} alt=""  id='img1'/>}
                </div>
            )
        })
      }
      <i class="fa-solid fa-circle-chevron-right" onClick={moveright}></i>
      <div className="container">
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
      </div>
    </div>
  )
}

export default Slider
