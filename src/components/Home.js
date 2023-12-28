import React, { useRef } from 'react';
import '../css/main.css';
import Navbar from './Navbar';
import Sliders from './Sliders';
import About from './About';
import Team from './Team';
import Services from './Services';
import img from '../assets/images/Medical+Banner.jpg';
import img2 from '../assets/images/d1.jpg';
import Footer from './Footer';

const Home = () => {
    const containerRef = useRef(null);

    const handleSwipe = (direction, percentage) => {
        const container = containerRef.current;

        if (container) {
            const totalWidth = container.scrollWidth;
            const scrollAmount = (percentage / 100) * totalWidth;
            const currentPosition = container.scrollLeft;
            let newPosition;

            if (direction === 'left') {
                newPosition = currentPosition - scrollAmount;
            } else if (direction === 'right') {
                newPosition = currentPosition + scrollAmount;
            }

            container.scrollTo({
                left: newPosition,
                behavior: 'smooth', // Add smooth scrolling behavior
            });
        }
    };

    return (
        <>
        <img className='bgimage_ab' src={img} />
        <div className='root'>
            
            <Navbar />
            <Sliders />
            <About />
            <Team />
            <Services />
            <div className='cutomers_div'>
                <div className='cdiv_head'>
                    <label> Our Happy patients</label>
                    <p>What our patients say</p>
                </div>

                <div className='cdiv_body_fl' ref={containerRef}>
                    {/* Your patient feedback components go here */}

                    <div className='cdiv_body_fl_indiv'>
                        <img src={img2} alt='Patient' />
                        <span>
                            Joseph
                            <br />
                            <label>Biologist</label>
                        </span>
                        <br />
                        <p className='fl-review'>
                        "The personalized care and attention I received at MicroLearn made all the difference in my health journey. The team's commitment to excellence is truly commendable."                        </p>
                    </div>

                    <div className='cdiv_body_fl_indiv'>
                        <img src={img2} alt='Patient' />
                        <span>
                            David
                            <br />
                            <label>Teacher</label>
                        </span>
                        <br />
                        <p className='fl-review'>
                        "I appreciate the modern facilities and advanced diagnostics at MicroLearn. The seamless experience and expert care have exceeded my expectations."                        </p>
                    </div> 
                    <div className='cdiv_body_fl_indiv'>
                        <img src={img2} alt='Patient' />
                        <span>
                            Sophia
                            <br />
                            <label>Athlete</label>
                        </span>
                        <br />
                        <p className='fl-review'>
                        "As an athlete, I rely on precision and expertise. MicroLearn not only meets but exceeds my health and wellness expectations. Truly a reliable partner on my fitness journey."

</p>
                    </div>
                </div>
                <div className='indiv_controls'>
                    <div className='indivc_left' onClick={() => handleSwipe('left', 33.5)}><i class="fa fa-angle-left"></i></div>
                    <div className='indivc_right' onClick={() => handleSwipe('right', 33.5)}><i class="fa fa-angle-right"></i></div>
                </div>
            </div>
            <div className=''></div>
            <Footer/>
        </div>
            
        </>
    );
};

export default Home;
