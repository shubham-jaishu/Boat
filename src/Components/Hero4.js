import React from 'react'
import logo1 from '../img/hero4/1.jpg'
import logo2 from '../img/hero4/2.png'
import logo3 from '../img/hero4/3.png'
import logo4 from '../img/hero4/4.jpg'

function Hero4() {
  return (
    <div className='hero4'>
      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo1})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Lunar Peak</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>2,699</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>6,999</p>
              <p>61% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i></p>
              <h3>Be first to review</h3>
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">AMOLED Display</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo2})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Aavante Bar Azure</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>14,999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>44,990</p>
              <p>67% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i></p>
              <h3>Be first to review</h3>
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">500W RMS Sound</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo3})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Aavante Bar 3600</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>14,999</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>44,990</p>
              <p>67% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i></p>
              <h3>Be first to review</h3>
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">500W RMS Sound</div>
        </div>
      </div>

      <div className="box">
        <div className="top" style={{ backgroundImage: `url(${logo4})` }}></div>
        <div className="down">
          <div className="left">
            <h1>Aavante Bar 480</h1>
            <div className="middle">
              <p><i class="fa-solid fa-indian-rupee-sign"></i>1,399</p>
              <p><i class="fa-solid fa-indian-rupee-sign"></i>3,490</p>
              <p>60% off</p>
            </div>
            <div className="last">
              <p><i class="fa-solid fa-star"></i></p>
              <h3>Be first to review</h3>
            </div>
          </div>
          <div className="right">
          <button>Add to Cart</button>
          </div>
          <div className="boxy">16W RMS Sound</div>
        </div>
      </div>
      <div className="txt">
          <h1>New <span>Launches</span></h1>
          <h2>View All <i class="fa-solid fa-circle-arrow-right"></i></h2>
      </div>
    </div>
  )
}

export default Hero4
