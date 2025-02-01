import react from 'react';
import './Video.css';
import demonvideo from './demonslayer.mp4';

function Video()
{
    return(
        <div className="div-video">
            <video className="video1" autoPlay loop muted>
                <source src={demonvideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default Video;