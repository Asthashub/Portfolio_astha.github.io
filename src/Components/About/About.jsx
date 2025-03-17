import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
// import about_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className='about-section'>
        <div className="about-left">
            {/* <img src={} alt="Profile" /> */}
        </div>
        <div className="about-right">
          
            <div className="about-para">
                <p>Hi! I'm Astha, a passionate web developer skilled in HTML, CSS, JavaScript, and React.js. I love building interactive & user-friendly websites.</p>

                <p>Always eager to learn, I'm expanding my skills in backend development and databases to become a full-stack developer. Let’s connect and create something amazing!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
                </div>
                <div className="about-skill">
                    <p>React JS</p> <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                    <p>Python</p> <hr style={{ width: "10%" }} />
                </div> 
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>Part of</h1>
          <p>GOOGLE CLOUD FACILITATOR</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
