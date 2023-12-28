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
                            Nivodental is a perfect responsive 5 in 1 $HTML5 template for #health #clinics, doctors, dentists, hospitals, surgeons and any type of health or medical organization website download.
                        </p>
                    </div>

                    <div className='cdiv_body_fl_indiv'>
                        <img src={img2} alt='Patient' />
                        <span>
                            Joseph
                            <br />
                            <label>Biologist</label>
                        </span>
                        <br />
                        <p className='fl-review'>
                            Nivodental is a perfect responsive 5 in 1 $HTML5 template for #health #clinics, doctors, dentists, hospitals, surgeons and any type of health or medical organization website download.
                        </p>
                    </div> 
                    <div className='cdiv_body_fl_indiv'>
                        <img src={img2} alt='Patient' />
                        <span>
                            Joseph
                            <br />
                            <label>Biologist</label>
                        </span>
                        <br />
                        <p className='fl-review'>
                            Nivodental is a perfect responsive 5 in 1 $HTML5 template for #health #clinics, doctors, dentists, hospitals, surgeons and any type of health or medical organization website download.
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
