import React from 'react'
import img1 from '../assets/images/d1.jpg'
import img2 from '../assets/images/d2.jpg'
import img3 from '../assets/images/d3.jpg'
const Team = () => {
    return (
        <div className='team_div'>
            <label>Our Team</label>
            <p>Our each team members in a way that highlights their expertise, role, and possibly a personal touch. </p>
            <div className='teamdiv_fl'>
                <div className='tdfl_card'>
                    <img src={img1} />
                    <span>Eliesh Josh <label>Founder & CEO</label></span>
                    <p>
                    Eliesh Josh, the dynamic Founder, is the visionary leader propelling our organization to new heights.</p>
                    <div className='cards_socials'>
                        
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-instagram"></i>
                    
                </div>

                </div>
                <div className='tdfl_card'>
                    <img src={img2} />
                    <span>Dr. Sarah Thompson <label>Chief Medical Officer</label></span>
                    <p>
                    Dr. Sarah Thompson plays a pivotal role in ensuring the highest standards of medical excellence at MicroLearn.</p>
                    <div className='cards_socials'>
                        
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-instagram"></i>
                    
                </div>
                </div>
                <div className='tdfl_card'>
                    <img src={img3} />
                    <span>John Rodriguez <label>Head of Operations</label></span>
                    <p>
                    Meet John Rodriguez, who oversees the seamless functioning of MicroLearn. With a strategic mindset.
                    </p>
                    <div className='cards_socials'>
                        
                            <i class="fa fa-facebook-f"></i>
                            <i class="fa fa-instagram"></i>
                        
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Team
