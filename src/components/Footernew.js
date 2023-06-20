import '../App.css'
import logo from '../img/logo.png'
import facebook from '../img/icons8-facebook-circled-94.png'
import mail from '../img/icons8-gmail-logo-94.png'
import twitter from '../img/icons8-instagram-94 (1).png'
import whatsapp from '../img/icons8-whatsapp-94.png'

function Footernew() {
    return (
        <div className='footer-section'>

            <div className='foot'>

                <div className='logo-img'>
                    <img className='logo' src={logo}></img>
                </div>

                <div className='feat-sec'>
                    <div className='features'>FEATURES</div>
                    <div className='underline'></div>
                    <div className='links'>
                        <div className='link'>HOME</div>

                        <div className='link'>ABOUT</div>

                        <div className='link'>SERVICES</div>

                        <div className='link'>PROJECTS</div>

                        <div className='link'>CONTACT US</div>

                    </div>
                </div>

                <div className='office-sec'>
                    <div className='office'>OFFICE</div>
                    <div className='underline-of'></div>
                    <div className='of-para'>
                        A-54, Basement W.H.S. Timber Market,<br></br>
                        Kirti Nagar, New Delhi-110015<br></br>
                        thedesign.yard@outlook.com
                    </div>
                    <div className='underline-sec'></div>
                    <div className='number'>+919213441244</div>
                </div>

                <div className='cont-sec'>
                    <div className='mail-id'>
                        <a><img src={mail} className='foot-img'></img></a>
                        <p className='head-mail'> Enter Your Mail id</p>

                    </div>

                    <div className='underline-third'></div>

                    <div>
                        <a><img className='foot-img' src={facebook}></img></a>
                        <a><img className='foot-img' src={whatsapp}></img></a>
                        <a><img className='foot-img' src={twitter}></img></a>
                    </div>
                </div>


            </div>

            <div className='foot-bot'>
                <div className='line'></div>
                <div className='copyright'>Copyright ©2023 All rights reserved | This Website is made with love by ABC TEAM
                </div>
            </div>
        </div>
    );
}

export default Footernew;