import React from 'react'
import '../css/main.css'
import abt_img1 from '../assets/images/e3582f05d33305f2bf18446d7fb76cdc.webp'
const About = () => {
  return (

    <>
      <div className='about_sec'>
        <h5>ABOUT US</h5>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="crd_abt" style={{ display: "flex" }}>
        <img src={abt_img1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5>World class beds facilities </h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="crd_abt" style={{ display: "flex" }}>
        <div class="card-body card-body-2 c-b-2">
          <h5>World class beds facilities </h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='crd_img'>
          <div className='crd_img_rw1'>
            <img src={abt_img1} class="card-img-top" alt="..." />
            <img src={abt_img1} class="card-img-top-crv" alt="..." />
          </div>
          <div className='crd_img_rw2 crd_img_rw2_atmob'>
            <img src={abt_img1} class="card-img-top card-img-top-crv-atmob" alt="..." />
            <img src={abt_img1} class="card-img-top-crv2" alt="..." />
            {/* <label className='more_imgs'>+5</label> */}
          </div>


        </div>

      </div>
    </>


  )
}

export default About
