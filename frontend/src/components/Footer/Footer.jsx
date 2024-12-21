import React from 'react'
import './Footer.css'
import  '../../assets/assets'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt= "" />
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
           </div>
            <div className="footer-content-center">
            <h2>company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>Phone number: +91-22-2418080</li>
                <li>E-Mail: contact@letseat.com</li>
            </ul>
            </div>
           
       </div>
    </div>
  )
}

export default Footer
