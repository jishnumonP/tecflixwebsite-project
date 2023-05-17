import React from 'react';
import './About.css';
import user from '../../../assets/img/ji.jpg'
const About = () => {
  return (
<div className="about-us-container">
      <div className="team-members">
        <h2>Our Team</h2>
        <div className="member-card">
          <img className="member-image" src={user} alt="John Doe" />
          <h3 className="member-name">Jishnu Helinski</h3>
          <p className="member-role">Co-Founder</p>
        </div>
        {/* Add more team members here */}
      </div>
      <div className="about-us-description">
        <h1 className="about-us-heading">About Us</h1>
        <p>
        With a passion for empowering learners of all ages, our mission is to make education accessible, engaging, and personalized through our cutting-edge educational technology platform.
        </p>
      </div>
    </div>

  );
};

export default About;
