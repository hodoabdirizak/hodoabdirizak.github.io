import React from 'react';
import './Home.css';
import videoBg from '../assets/3D.mp4';

const Home = ({ scrollToSection }) => {
    return (
        <div className='homepage__container'>
            <video className='homepage__video' src={videoBg} autoPlay loop muted />
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
