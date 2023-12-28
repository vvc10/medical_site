import React from 'react'
import '../css/main.css'
import crimg1 from '../assets/images/heart-rate.png'
const Cards = () => {
    return (
        <div className='cards_div' style={{backgroundColor: 'white', margin: '0rem auto', width: 'fit-content', padding: '4rem 2rem'}}>
            <div className="card">
                <i class="fa fa-heartbeat" style={{ fontSize: "24px" }}></i>
                <div className="card-body">
                    <h5 className="card-title">Primary Care</h5>
                    <p className="card-text">Our primary care services go beyond routine check-ups. We provide personalized healthcare solutions.</p>
                </div>
            </div>
            <div className="card" >
                <i class="fa fa-heartbeat" style={{ fontSize: "24px" }}></i>
                <div className="card-body">
                    <h5 className="card-title">Diagnostic Services</h5>
                    <p className="card-text">At MicroLearn, we offer state-of-the-art diagnostic services to ensure accurate and timely health assessments. </p>
                </div>
            </div>
            <div className="card" >
                <i class="fa fa-heartbeat" style={{ fontSize: "24px" }}></i>
                <div className="card-body">
                    <h5 className="card-title">Wellness</h5>
                    <p className="card-text">Experience personalized wellness consultations tailored to your unique needs. </p>
                </div>
            </div>
            <div className="card" >
                <i class="fa fa-heartbeat" style={{ fontSize: "24px" }}></i>
                <div className="card-body">
                    <h5 className="card-title"> Cardiac Care</h5>
                    <p className="card-text">Our specialized cardiac care services focus on heart health, providing comprehensive assessments.  </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
