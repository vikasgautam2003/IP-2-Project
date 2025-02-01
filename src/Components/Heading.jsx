import React from 'react';
import './Heading.css';
import demonvideo from './demonslayer.mp4';

function Heading() {
  return (
    <div>
    <div className="div-heading">
      <div className="nav">
        <button className='login'>Login</button>
        <button className='register'>Register</button>
      </div>
      <p className="heading1">ANUVAADIKA</p>
      <p className="heading2">The AI Video Subtitle Generator</p>

      
      <button className="btn">Get Started</button>
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
    </div>
  );
}
export default Heading;

