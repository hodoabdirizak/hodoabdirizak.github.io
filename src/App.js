import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Element, scroller } from 'react-scroll';
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import LoadingScreen from './components/LoadingScreen';

const App = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [loading, setLoading] = useState(true);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
        { loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
        <Router>
            <Navbar onLinkClick={(section) => scroller.scrollTo(section, { smooth: true, duration: 800 })} />

            <div className="crosshair">
                <div className="horizontal top" style={{ top: `${cursorPosition.y}px` }}></div>
                <div className="horizontal bottom" style={{ top: `${cursorPosition.y}px` }}></div>
                <div className="vertical left" style={{ left: `${cursorPosition.x}px` }}></div>
                <div className="vertical right" style={{ left: `${cursorPosition.x}px` }}></div>
            </div>

            <div className="coordinates">
                COR: {cursorPosition.x}, {cursorPosition.y}
            </div>

            <main className="main-content">
                <Element name="home">
                    <Home />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="work">
                    <Work />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </main>
        </Router>
    )}
    </>
    );
};

export default App;
