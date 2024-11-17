import React, { Component } from "react";
import './About.css';
import imgSrc from '../assets/ProfileImage.jpg';
import javascript_logo from '../assets/javascript_logo.png'
import react_logo from '../assets/react_logo.png'
import vue_logo from '../assets/vue_logo.png'
import angular_logo from '../assets/angular_logo.png'
import sass_logo from '../assets/sass_logo.png'
import typescript_logo from '../assets/typescript_logo.png'
import node_logo from '../assets/node_logo.png'
import java_logo from '../assets/java_logo.png'
import sql_logo from '../assets/sql_logo.png'
import c_logo from '../assets/c_logo.png'
import figma_logo from '../assets/figma_logo.png'
import docker_logo from '../assets/docker_logo.png'
import postman_logo from '../assets/postman_logo.png'

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
        <p className="about__tech-title">
        Technical Skillset
        </p>
        <div className="about__tech-container">
          <div className="about__tech-section">
            <h3 className="about__tech_section-title">Front-end</h3>
            <div className="about__tech-section-row">
              <div className="about__tech_item">
                <img src={javascript_logo} alt="JavaScript" className="about__tech_item-logo" />
                <p className="about__tech_item-title">JavaScript</p>
              </div>
              <div className="about__tech_item">
                <img src={react_logo} alt="React" className="about__tech_item-logo" />
                <p className="about__tech_item-title">React.js</p>
              </div>
              <div className="about__tech_item">
                <img src={vue_logo} alt="Vue" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Vue.js</p>
              </div>
            </div>
            <div className="about__tech-section-row">
              <div className="about__tech_item">
                <img src={angular_logo} alt="Angular" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Angular</p>
              </div>
              <div className="about__tech_item">
                <img src={sass_logo} alt="Sass" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Sass</p>
              </div>
              <div className="about__tech_item">
                <img src={typescript_logo} alt="Typescript" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Typescript</p>
              </div>
            </div>
          </div>
          <div className="about__tech-section">
            <h3 className="about__tech_section-title">Back-end</h3>
            <div className="about__tech-section-row">
              <div className="about__tech_item">
                <img src={node_logo} alt="Node" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Node.js</p>
              </div>
              <div className="about__tech_item">
                <img src={java_logo} alt="Java" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Java</p>
              </div>
              <div className="about__tech_item">
                <img src={sql_logo} alt="SQL" className="about__tech_item-logo" />
                <p className="about__tech_item-title">SQL</p>
              </div>
            </div>
            <div className="about__tech-section-row">
              <div className="about__tech_item">
                <img src={c_logo} alt="C" className="about__tech_item-logo" />
                <p className="about__tech_item-title">C</p>
              </div>
            </div>
          </div>
          <div className="about__tech-section">
            <h3 className="about__tech_section-title">Tools</h3>
            <div className="about__tech-section-row">
              <div className="about__tech_item">
                <img src={figma_logo} alt="Figma" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Figma</p>
              </div>
              <div className="about__tech_item">
                <img src={docker_logo} alt="Docker" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Docker</p>
              </div>
              <div className="about__tech_item">
                <img src={postman_logo} alt="Postman" className="about__tech_item-logo" />
                <p className="about__tech_item-title">Postman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
