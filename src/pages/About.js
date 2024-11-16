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
            My name is Hodo, and I’m a current Computer Science student at Toronto Metropolitan University. <br></br><br></br> I’m passionate about learning and exploring new concepts and especially using technology to do meaningful, cool things.
            <br></br><br></br> I'm currently interested in web development and utilizing user empathy in my designs.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
