// import './FAQs.css';

// function FAQs()
// {
//     return(
//         <>
//            <section className='faq-section'>
//              <h1 className='title-faq'>Frequently Asked Questions</h1>

//              <ul className='faq'>
//                 <li>
//                     <div className='q'>
//                         <span className='arrow'>

//                         </span>
//                         <span className='question'>What is Netflix?</span>
//                     </div>
//                     <div className='a'>
//                         <p className='para-a'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro cupiditate repellat perspiciatis tenetur, consectetur saepe impedit. Commodi, nemo modi.
//                         </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div className='q'>
//                         <span className='arrow'>

//                         </span>
//                         <span className='question'>What is Netflix?</span>
//                     </div>
//                     <div className='a'>
//                         <p className='para-a'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro cupiditate repellat perspiciatis tenetur, consectetur saepe impedit. Commodi, nemo modi.
//                         </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div className='q'>
//                         <span className='arrow'>

//                         </span>
//                         <span className='question'>What is Netflix?</span>
//                     </div>
//                     <div className='a'>
//                         <p className='para-a'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro cupiditate repellat perspiciatis tenetur, consectetur saepe impedit. Commodi, nemo modi.
//                         </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div className='q'>
//                         <span className='arrow'>

//                         </span>
//                         <span className='question'>What is Netflix?</span>
//                     </div>
//                     <div className='a'>
//                         <p className='para-a'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro cupiditate repellat perspiciatis tenetur, consectetur saepe impedit. Commodi, nemo modi.
//                         </p>
//                     </div>
//                 </li>
//                 <li>
//                     <div className='q'>
//                         <span className='arrow'>

//                         </span>
//                         <span className='question'>What is Netflix?</span>
//                     </div>
//                     <div className='a'>
//                         <p className='para-a'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro cupiditate repellat perspiciatis tenetur, consectetur saepe impedit. Commodi, nemo modi.
//                         </p>
//                     </div>
//                 </li>
//              </ul>
//            </section>
//         </>
//     )


// }

// export default FAQs;



import { useRef, useEffect } from 'react';
import './FAQs.css';

function FAQs() {
    const faqRefs = useRef([]);

    useEffect(() => {
        faqRefs.current.forEach((faq) => {
            if (faq) {
                const question = faq.querySelector('.q');
                const answer = faq.querySelector('.a');
                const arrow = faq.querySelector('.arrow');

                question.addEventListener('click', () => {
                    answer.classList.toggle('show');
                    arrow.classList.toggle('rotate');
                });
            }
        });
    }, []);

    const faqs = [
        { question: "How can I change the style of my subtitles on InVideo AI?", answer: "You can change the subtitle styles using the edit magic box. Once your video is generated, prompt the edit magic box with commands. For example: 'change subtitles to word by word Hormozi style'." },
        { question: "How to add subtitles to a video?", answer: "Adding subtitles using AI is simple:\n1. Sign up on InVideo AI for free.\n2. Prompt InVideo AI about the video you want to make.\n3. Enter your prompt, choose gender, accent, background music, and subtitle style.\n4. AI will generate a video based on the prompt. Once ready, export it with subtitles." },
        { question: "Can I translate subtitles into another language?", answer: "Yes, with InVideo's AI subtitle generator, you can translate subtitles into 50+ global languages. After generating the initial subtitles, simply enter a prompt to switch languages, and the subtitles will update accordingly." },
        { question: "How can I add, remove, and change the position of subtitles?", answer: "You can add or remove subtitles by prompting the magic box to do so and clicking the Generate option. Use commands like:\n- 'Add subtitles'\n- 'Remove subtitles'\nYou can also change the position of subtitles by prompting the magic box to move them to the top, center, or bottom. Or specify a position like: 'Change subtitle position to 30% from the top'." },
        { question: "Is the auto subtitle generator by AnuVaadika AI free?", answer: "Yes! It's free for everyone to generate, transcribe, and add subtitles to your videos. The free version allows you to add subtitles at no cost but will include a watermark." }
    ];
    

    return (
        <section className='faq-section'>
            <h1 className='title-faq'>Frequently Asked Questions</h1>
            <ul className='faq'>
                {faqs.map((faq, index) => (
                    <li key={index} ref={(el) => (faqRefs.current[index] = el)}>
                        <div className='q'>
                            <span className='arrow'></span>
                            <span className='question'>{faq.question}</span>
                        </div>
                        <div className='a'>
                            <p className='para-a'>{faq.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FAQs;
