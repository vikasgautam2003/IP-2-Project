
import React from "react";
import "./BackgroundVideo.css"; 
import backgroundVideo from "./videoplayback.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default BackgroundVideo;
