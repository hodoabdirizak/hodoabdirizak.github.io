import React, { Component } from "react";
import './About.css';
import imgSrc from '../assets/ProfileImage.jpg';

class About extends Component {
  render() {
    return (
      <div className="about__container">
        <img src={imgSrc} alt="About" className="about__image" />
        <div className="about__text">
          <h2 className="about__title">Hello!</h2>
          <p className="about__text-section">
            Hi, I’m Hodo! I’m a Computer Science student at Toronto Metropolitan University with a passion for building thoughtful, meaningful solutions through technology. <br></br><br></br>
            I specialize in full-stack development, where I get to combine my love for designing intuitive user interfaces with the technical challenge of building reliable back-end systems. One of my core values is user empathy—understanding how people interact with technology and creating experiences that genuinely make their lives easier and better. <br></br><br></br>
            I’m constantly learning and experimenting, whether it’s diving into the latest frameworks, exploring creative problem-solving techniques, or just figuring out new ways to make technology more human-centered. <br></br><br></br>
            Outside of school and work, I love brainstorming new project ideas and finding inspiration in the ways technology can make a difference.
          </p>

        </div>
      </div>
    );
  }
}

export default About;
