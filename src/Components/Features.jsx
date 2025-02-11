import react from 'react';
import './Features.css';

function Feature()
{
    return(
        <div className='feats'>
            <p className='feat-para'><span className='span1'>(Our Services)</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are the AI that brings subtitles to life, ensuring accuracy, clarity, and seamless storytelling.</p>
            <div className='feat'><span className='span2'>01</span> Generate Subtiles <br /><div className='div5'><div className='div6'> For Free</div><div className='div6'>Real Time</div></div></div>
            <hr  className='hr1'/>
            <div className='feat'><span className='span2'>02</span> Download Subtitles<br /><div className='div5'><div className='div6'>Subscription</div><div className='div6'>.srt Format</div></div></div>
            <hr  className='hr1'/>
            <div className='feat'><span className='span2'>03</span> Customize Subtitles<br /><div className='div5'><div className='div6'> FreeStyle</div><div className='div6'>Custom</div></div></div>
            <hr  className='hr1'/>
        </div>
    );
}

export default Feature;
