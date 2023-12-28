import React from 'react'
// import slider1 from '../assets/images/Light Blue Green Dark Green Dynamic Frames Support Service Advertising Banner.png'
import slider2 from '../assets/images/Medical+Banner.jpg'
// import slider3 from '../assets/images/10.jpg'
import '../css/main.css'
import Cards from './Cards'
const Sliders = () => {
  return (
    <div className='slider_unity'>
      <div class="carousel carousel-dark slide">

        <div class="carousel-inner">

          <img src={slider2} class="w-100" alt="..." />
          <div class="carousel-caption">
            <h5>We care about <br />your Health.</h5>
            <p> We MicroLearn – Your Ultimate Self-Care Hub!</p>
            <div className='input_sub' >
              <input placeholder='email id' />
              <button>Subscribe</button>

            </div>
            <span>Receive notifications about our latest health tips and updates.</span>

          </div>




        </div>
        <div className='input_sub_inmob' >
          <input placeholder='email id' />
          <button>Subscribe</button>

        </div>
        <span className='input_caption'>Receive notifications about our latest health tips and updates.</span>
      </div>
      <Cards />
    </div>
  )
}

export default Sliders
