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
                    <p>[Founder/CEO Name] is the visionary leader and driving force behind [Your Company Name].</p>
                </div>
                <div className='servicesdiv_fl'>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img1} /></div>
                        <label>Primary Care</label>
                        <p>General check-ups
                            Vaccinations
                            Preventive care</p>
                    </div>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img2} /></div>
                        <label>Primary Care</label>
                        <p>General check-ups
                            Vaccinations
                            Preventive care</p>
                    </div>
                    <div className='sdfl_cards'>
                        <div className='cards_icon'><img src={img3} /></div>
                        <label>Primary Care</label>
                        <p>General check-ups
                            Vaccinations
                            Preventive care</p>
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
