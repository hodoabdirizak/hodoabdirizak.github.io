import React, { Component } from "react";
import './Contact.css'
import linkedin_logo from '../assets/linkedin_logo.png';
import email_logo from '../assets/email_logo.png'
import github_logo from '../assets/github_logo.png'
import behance_logo from '../assets/behance_logo.png'
import dribbble_logo from '../assets/dribbble_logo.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact__container">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__text-section">
          I’m in my final year of Computer Science at Toronto Metropolitan University, graduating this spring. Outside of tech, I enjoy exploring record shops, crate-digging for hidden CD gems, and reading about social ecology.
          <br></br>
          <br></br>
          If you’d like to connect, discuss opportunities, or just say hello, feel free to reach out!
        </p>
        <div className="contact__logo_container">
          <a class='contact__logo' href="https://www.linkedin.com/in/hodoabdirizak/" target="_blank" rel="noreferrer">
            <img class='contact__logo' src={linkedin_logo} alt="" width="60" height="60"></img>
          </a>
          <a class='contact__logo' href="mailto:hodo.abdirizak@torontomu.ca" target="_blank" rel="noreferrer">
            <img class='contact__logo' src={email_logo} alt="" width="60" height="60"></img>
          </a>
          <a class='contact__logo' href="https://github.com/hodoabdirizak" target="_blank" rel="noreferrer">
            <img class='contact__logo' src={github_logo} alt="" width="60" height="60"></img>
          </a>
          <a class='contact__logo' href="https://www.behance.net/hodoa" target="_blank" rel="noreferrer">
            <img class='contact__logo' src={behance_logo} alt="" width="60" height="60"></img>
          </a>
          <a class='contact__logo' href="https://dribbble.com/hodoabdirizak" target="_blank" rel="noreferrer">
            <img class='contact__logo' src={dribbble_logo} alt="" width="60" height="60"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;