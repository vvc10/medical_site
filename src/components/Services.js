import React from 'react'
import img1 from '../assets/images/stethoscope.png'
import img2 from '../assets/images/24-hour-service.png'
import img3 from '../assets/images/hand.png'
const Services = () => {
    return (
        <>
            <div className='services_div'>
                <div className='servicesdiv_head'>
                    <label>Our Services</label>
                    <p>With a passion for innovation and a relentless pursuit of quality, Eliesh Joseph serves as the driving force behind the comprehensive range of services we offer.</p>
                </div>
                <div className='servicesdiv_fl'>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img1} /></div>
                        <label>Wellness Programs</label>
                        <p>Embrace a holistic approach to well-being with our comprehensive wellness programs.</p>
                    </div>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img2} /></div>
                        <label>24/7 Support</label>
                        <p>Access support around the clock with our dedicated 24-hour service. Health needs can arise at any time</p>
                    </div>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img3} /></div>
                        <label>Personalized Patient Care</label>
                        <p>Experience a personalized approach to healthcare that goes beyond conventional medical practices. </p>
                    </div>
                </div>

            </div>
            <div className='servicesdiv_sec2'>
                <div className='sec2_indiv'>
                    <div className='indiv_pfl'>
                        <p>
                            Book an appointment now and get an relief of 20% off.
                        </p>
                        <label>Get an appointment and schedule instant consultation at your fingertips now.</label>
                    </div>
                    <button className='sdivs2_btn'>
                        Get an Appointment </button>
                </div>

            </div>
        </>

    )
}

export default Services
