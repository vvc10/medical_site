import React from 'react'
import img1 from '../assets/images/d1.jpg'
import img2 from '../assets/images/d2.jpg'
import img3 from '../assets/images/d3.jpg'
const Team = () => {
    return (
        <div className='team_div'>
            <label>Our Team</label>
            <p>each team member in a way that highlights their expertise, role, and possibly a personal touch. Here's a template you can use.</p>
            <div className='teamdiv_fl'>
                <div className='tdfl_card'>
                    <img src={img1} />
                    <span>Eliesh Josh</span>
                    <p>[Founder/CEO Name] is the visionary leader and driving force behind [Your Company Name]. </p>
                    <div className='cards_socials'>
                        
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-instagram"></i>
                    
                </div>

                </div>
                <div className='tdfl_card'>
                    <img src={img2} />
                    <span>Eliesh Josh</span>
                    <p>[Founder/CEO Name] is the visionary leader and driving force behind [Your Company Name]. </p>
                    <div className='cards_socials'>
                        
                        <i class="fa fa-facebook-f"></i>
                        <i class="fa fa-instagram"></i>
                    
                </div>
                </div>
                <div className='tdfl_card'>
                    <img src={img3} />
                    <span>Eliesh Josh</span>
                    <p>[Founder/CEO Name] is the visionary leader and driving force behind [Your Company Name]. </p>
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
