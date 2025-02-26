import React from 'react';
import './Heading.css';

// import transition from "./Transition.jsx";
import Video from './Video.jsx';
import Feature from '../Features/Features.jsx';
import Objectives from '../Objectives/Objectives.jsx';
import Expo from '../Expo/Expo.jsx';
import FAQs from '../FAQs/FAQs.jsx';


function Heading() {
  return (
    <div>
    <div className="div-heading">
      <div className="nav">
        <ul className='nav-links'>
          <li>Start</li>
          <li>Contact</li>
          <li>Github</li>
        </ul>
        <button className='login'>Login</button>
        <button className='register'>Register</button>
      </div>
      <p className="heading1">ANUVAADIKA</p>
      <p className="heading2">The AI Video Subtitle Generator</p>

      
      <button className="btn">Get Started</button>
      <button className="tut">Tutorial</button>
      <br /> 
    </div>
    <div className="box">
    <div className="single-box" style={{ background: "#3b5998" }}>
      <a href="#">
        <p>Follow us on <i className="fa-brands fa-facebook-f"></i></p>
      </a>
    </div>
    <div className="single-box" style={{ background: "#4099ff" }}>
      <a href="#">
        <p>Follow us on <i className="fa-brands fa-instagram"></i></p>
      </a>
    </div>
    <div className="single-box" style={{ background: "#053eff" }}>
      <a href="#">
        <p>Follow us on <i className="fa-brands fa-x-twitter"></i></p>
      </a>
    </div>
    <div className="single-box" style={{ background: "#ff0000" }}>
      <a href="#">
        <p>Follow us on <i className="fa-brands fa-youtube"></i></p>
      </a>
    </div>
    </div>
    <Video />
    <Feature/>

    <Objectives />
    <Expo />
    <FAQs />
    </div>
    
  );
}
export default Heading;
