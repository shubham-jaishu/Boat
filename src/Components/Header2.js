import React from 'react'
import logo1 from '../img/header2/1.jpg'
import logo2 from '../img/header2/2.jpg'
import logo3 from '../img/header2/3.jpg'
import logo4 from '../img/header2/4.jpg'
import tick from '../img/header2/5.png'

function Header2() {
  return (
    <div className='header2'>
        <div className="top">
            <h1>Best of <span>boAt</span></h1>
            <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
        </div>
        <div className="main">
            <ul>
              <li id='spcl1'>Best Sellers</li>
              <li id='spcl2'>Home Theater Systems & Soundbars</li>
              <li id='spcl3'>Top Earbuds</li>
              <li id='spcl4'>Top Watches</li>
              <li id='spcl5'>Car Accessories</li>
            </ul>
        </div>
        <div className="main_box">
        <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo1})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Airdopes 161</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,499</p>
              <p>60% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.9 |</p>
              <p>120</p>
              <img src={tick} alt="png" />
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">60 Hours Playback</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo2})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Airdopes 131 Pro</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,990</p>
              <p>67% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.9 |</p>
              <p>182</p>
              <img src={tick} alt="png" />
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">40 Hours Playback</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo3})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Wave Flex Connect</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>1,499</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>7,990</p>
              <p>81% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.8 |</p>
              <p>31</p>
              <img src={tick} alt="png" />
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">8 Hours Playback</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo4})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Airdopes 141</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>1,299</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>4,490</p>
              <p>71% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.9  |</p>
              <p>647</p>
              <img src={tick} alt="png" />
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">42 Hours Playback</div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Header2  