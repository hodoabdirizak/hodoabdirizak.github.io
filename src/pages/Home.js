import React, { useState, useEffect } from 'react';
import './Home.css';
import videoBg from '../assets/3D.mp4';
import gifBg from '../assets/3D.gif';

const Home = ({ scrollToSection }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='homepage__container'>
            {isMobile ? (
                <img src={gifBg} alt="Background Animation" className="homepage__gif" />
            ) : (
                <video className='homepage__video' playsInline autoPlay loop muted>
                    <source src={videoBg} type='video/mp4' />
                </video>
            )}

            <div className='homepage__name-title'>
                <div className='name-line'>
                    <p>HODO</p>
                    <p className='name-display-italic'>ABDIRIZAK</p>
                </div>
                <p className='name-line__mobile'>HODO&emsp;<i>ABDIRIZAK</i></p>
                <div className='homepage__scroll-prompt' onClick={scrollToSection}>
                    Scroll down
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
