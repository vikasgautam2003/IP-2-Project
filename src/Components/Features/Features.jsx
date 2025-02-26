import react from 'react';
import './Features.css';

function Feature()
{
    return(
        <div className='feats'>
            <p className='feat-para'><span className='span1'>(Our Services)</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are the AI that brings subtitles to life, ensuring accuracy, clarity, and seamless storytelling.</p>
            <div className='feat'>
            
            <div className='gen1'>
                    <div className='enclose'>
                        <i className="fa-solid fa-closed-captioning cartoon1"></i>
                        <h3 className='heading3'>Generate Subtitle</h3>
                        <p className='para-video'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum tempora neque ad culpa quisquam reprehenderit voluptatem odio totam laborum atque.</p>
                    </div>
                    <div className='disclose'>
                        <video autoPlay muted loop className="video-feat">
                            <source src="/videoplayback (2).mp4" />
                            
                        </video>
                    </div>
                    
                    
                </div>
                
                <div className='gen2'>
                    <div className='disclose' >
                        
                        <video autoPlay muted loop className="video-feat1">
                            <source src="/videoplayback (3).mp4" />
                            
                        </video>
                    </div>
                    <div className='enclose' >
                    <i className="fa-solid fa-file-lines cartoon1-1"></i>
                        <h3 className='heading3-1'>Download Subtitle</h3>
                        <p  className='para-video-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum tempora neque ad culpa quisquam reprehenderit voluptatem odio totam laborum atque.</p>
                        
                    </div>
                    
                    
                </div>
                <div className='gen1'>
                    <div className='enclose'>
                        <i className="fa-solid fa-upload cartoon1"></i>
                        <h3 className='heading3'>Upload Subtitles Video</h3>
                        <p  className='para-video'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum tempora neque ad culpa quisquam reprehenderit voluptatem odio totam laborum atque.</p>
                    </div>
                    <div className='disclose'>
                        <video autoPlay muted loop className="video-feat">
                            <source src="/videoplayback (4).mp4" />
                            
                        </video>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Feature;


