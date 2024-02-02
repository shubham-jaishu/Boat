import React from 'react'
import logo1 from '../img/hero2/1.jpg'
import logo2 from '../img/hero2/2.jpg'
import logo3 from '../img/hero2/3.jpg'
import logo4 from '../img/hero2/4.jpg'
import tick from '../img/hero2/5.png'

function Hero2() {
  return (
    <div className='hero2'>
      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo1})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Airdopes 131</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>849</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,999</p>
              <p>72% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.8 |</p>
              <p>1336</p>
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
            <h1>Airdopes 161</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,490</p>
              <p>60% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.9 |</p>
              <p>150</p>
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
            <h1>Rockerz 235 V2</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,990</p>
              <p>67% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i> 4.8 |</p>
              <p>1074</p>
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
  )
}

export default Hero2
