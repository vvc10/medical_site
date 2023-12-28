import React from 'react'
import '../css/main.css'
import abt_img1 from '../assets/images/e3582f05d33305f2bf18446d7fb76cdc.webp'
const About = () => {
  return (

    <>
      <div className='about_sec'>
        <h5>WHY CHOOSE US </h5>
        <p>Reason why you should choose us.</p>
      </div>
      <div class="crd_abt" style={{ display: "flex" }}>
        <img src={abt_img1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5>State-of-the-Art Facilities </h5>
          <p class="card-text">

            Benefit from our modern and well-equipped facilities designed to provide a comfortable and efficient healthcare experience. Your safety and satisfaction are paramount.          </p>
        </div>
      </div>
      <div class="crd_abt" style={{ display: "flex" }}>
        <div class="card-body card-body-2 c-b-2">
          <h5>Experienced Healthcare Professionals </h5>
          <p class="card-text">
            Our team consists of experienced and compassionate healthcare professionals dedicated to delivering the highest standards of medical care. Trust us with your health.
          </p>
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
      <div class="crd_abt" style={{ display: "flex" }}>
        <img src={abt_img1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5>Patient-Centric Approach </h5>
          <p class="card-text">

            We prioritize your needs and concerns, ensuring a patient-centric approach to healthcare. Your comfort, trust, and well-being are our top priorities.
          </p>
        </div>
      </div>
    </>


  )
}

export default About
