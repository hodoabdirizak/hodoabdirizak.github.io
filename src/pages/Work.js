import React, { Component } from "react";
import './Work.css';
class Work extends Component {
  render() {
    return (
      <div className="resume__container">
        <div className="work__text-section">
        <h2 className="work__title">Work & Experience</h2>
          <div className="work__item">
            <div className="work__company-name">
              Global Solutions Team
            </div>
            <div className="work__details">
              <div className="work__position">Junior Web Developer</div>
              <div className="work__location">Toronto, ON</div>
              <div className="work__duration">Jan. - Aug. 2024</div>
            </div>
          </div>
          <hr className="solid" />

          <div className="work__item">
            <div className="work__company-name">GoDaddy Inc.</div>
            <div className="work__details">
              <div className="work__position">Software Development Engineer Intern</div>
              <div className="work__location">Toronto, ON</div>
              <div className="work__duration">May - Aug. 2023</div>
            </div>
          </div>
          <hr className="solid" />

          <div className="work__item">
            <div className="work__company-name">TD Bank</div>
            <div className="work__details">
              <div className="work__position">Software Engineer Intern</div>
              <div className="work__location">Toronto, ON</div>
              <div className="work__duration">May - Aug. 2022</div>
            </div>
          </div>
          <hr className="solid" />
        </div>
      </div>
    );
  }
}

export default Work;
