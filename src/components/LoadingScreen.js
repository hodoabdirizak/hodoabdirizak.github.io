import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  const isMobile = window.innerWidth <= 768;

  const duration = isMobile ? 4500 : 3000;
  const intervalTime = 50;

  useEffect(() => {
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, intervalTime);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete, duration]);

  return (
    <div className="loading-screen">
      <p className="loading-text">Initializing...</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
