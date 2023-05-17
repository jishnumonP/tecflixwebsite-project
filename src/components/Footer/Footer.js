import React from 'react'
import '../Footer/Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'
function Footer() {
    const handleItemClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={footer} alt='' />
                        </div>
                        <h2>TECHFLIX AI</h2>
                    </div>
                    <p>
                    Embrace the future of innovation and technology with our cutting-edge tech business solutions.
                    </p>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Company</h4>
                    <ul className="footer_link">
                        <li><Link to="/courses" onClick={handleItemClick}>Our programs</Link></li>
                        <li><Link to="/plans" onClick={handleItemClick}>Our plan</Link></li>
                        <li><a href="https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOg0b">Become a member</a></li>
                    </ul>
                </div>

                <div className="footer_box">
                    <h4 className="footer_title">Quick Links</h4>
                    <ul className="footer_link">
                        <li><Link to='/about'  onClick={handleItemClick}>About Us</Link></li>
                        <li><Link to='/contact' onClick={handleItemClick}>Contact us</Link></li>
                        <li><Link to='/support'  onClick={handleItemClick}>Support</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer