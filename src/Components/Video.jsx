import react from 'react';
import './Video.css';


function Video()
{
    return(
        <div className="div-video">
            <video className="video1" autoPlay loop muted>
                <source src="/demonslayer.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;