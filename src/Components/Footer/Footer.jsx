import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import footer_logo from '../../assets/footer_logo.svg'
import underline from '../../assets/nav_underline.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="footer-top-left">
                <div className="logo">
                    <h1>Prathi</h1>
                    <img src={underline} alt="Logo" />
                </div><br />
                <p>I have experience in Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr /> 
        <div className="footer-bottom">
            <p className='footer-bottom-left'>All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer