
import React from "react";
import "./BackgroundVideo.css"; 


const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/Falling White Petals Free Background Videos, Motion Graphics, No Copyright _ All Background Videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default BackgroundVideo;
