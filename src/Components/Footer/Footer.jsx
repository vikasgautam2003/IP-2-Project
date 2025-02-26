import './Footer.css';

function Footer()
{
    return(
        <>
           <footer>
               <div className='container'>
                 <div className='row'>
                    <div className='footer-col'>
                        <h4>AnuVaadika</h4>
                        
                            <ul>
                            <li><a href="">Overview</a></li>
                            <li><a href="">Tutorial</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Demo</a></li>
                            </ul>
                        
                    </div>

                    <div className='footer-col'>
                        <h4>Team</h4>
                        <ul>
                            <li><a href="">Vikas Gautam</a></li>
                            <li><a href="">Vikas</a></li>
                            <li><a href="">Yatin</a></li>
                            <li><a href="">Yashaswi</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Technology</h4>
                        <ul>
                            <li><a href="">React</a></li>
                            <li><a href="">Python</a></li>
                            <li><a href="">Whisper AI</a></li>
                            <li><a href="">Node Js</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <h4>Newsletter</h4>
                        <form action="">
                            <input type='text' placeholder='Enter your name'  className='inputName'/>
                            <input type="email" placeholder="Enter your email" className='inputEmail' />
                            <input type="submit" value="Subscribe" className='inputSubmit'/>
                        </form>
                    </div>

                   
                 </div>
                 <hr className="footer-line" />
                 <div className='row'>
                    <div className='col'>
                        <p>&#169; 2025 AnuVaadika. ALL Rights Reserved</p>
                    </div>
                    <div className='socialIcons'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                 </div>
               </div>
           </footer>
        </>
    );
}


export default Footer;