import './Objectives.css';


function Objectives()
{
    return (
        <>
            <div className="objectives">
                <h2 className="objectives-head">Problems<br /> We Solved!!</h2>
                <div className="objectives-content">
                    <div className="objective">
                        <h3 className="objective1">Accessibility & Inclusivity</h3>
                        <img src='/Adobe Express - file (4).png' className='image-object'></img>
                        <p className="para-obj">
                            AI-generated multilingual subtitles make content accessible to deaf, hard-of-hearing users, and non-native speakers, ensuring wider reach.
                        </p>
                    </div>
                    <div className="objective">
                        <h3 className="objective1">Time & Cost Efficiency</h3>
                        <img src='/Adobe Express - file (4).png' className='image-object'></img>
                        <p className="para-obj">
                            Automates transcription and syncing, eliminating manual effort, reducing costs, and accelerating subtitle creation for content creators.
                        </p>
                    </div>
                    <div className="objective">
                        <h3 className="objective1">Engagement Boost</h3>
                        <img src='/Adobe Express - file (4).png' className='image-object'></img>
                        <p className="para-obj">
                            Improves search rankings, increases discoverability, and enhances viewer retention by providing subtitles for silent video consumption.
                        </p>
                    </div>

                </div>
            </div>
        </>
        
    );
}


export default Objectives;