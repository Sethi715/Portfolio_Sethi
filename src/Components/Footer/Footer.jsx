import React from 'react'
import './Footer.css'
import logo2 from './../../assets/logo2.svg'
import user_icon from './../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo2} />
                <p>Frontend developer with 2+ years of experience.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={user_icon} />
                <input type='email' placeholder='Enter your email' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className='footer-bottom-left'>&copy; 2024 Tejasv Sethi. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Privacy</p>
            <p>Privacy Policy</p>
          </div>

        </div>
       
    </div>
  )
}

export default Footer