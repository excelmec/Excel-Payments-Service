import React from "react"
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
// import { Link } from "react-router-dom";


import "./Footer.css"
import excel_logo from "../../assets/logo/excellogowithtext.png"
import mec_logo from "../../assets/logo/mec_logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__main">
        <div className="footer-social">
          <div className="footer-social-college">
            <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer">
              <img src={mec_logo} className="mec__logo" alt="mec_logo" />
            </a>
          </div>
          
          <div className="footer-social-socialmedia">
            <a
              href="https://www.facebook.com/excelmec"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook
                style={{ border: "none" }}
                className="contact_social_icon"
              />
            </a>
            <a
              href="https://www.instagram.com/excelmec/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="contact_social_icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/excelmec/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="contact_social_icon" />
            </a>
            <a
              href="https://twitter.com/excelmec"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter className="contact_social_icon" />
            </a>
          </div>

          <div className="footer-social-event">
            <a href="https://excelmec.org/" target="_blank" rel="noreferrer">
              <img src={excel_logo} className="excel__logo" alt="excel_logo" />
            </a>
          </div>
        </div>
        {/* <div className="footer_nav">
            <Link style={{color: 'white'}} to='about'>About Us</Link>            
            <Link style={{color: 'white'}} to='contact-us'>Contact Us</Link>            
            <Link style={{color: 'white'}} to='services'>Services</Link>            
            <Link style={{color: 'white'}} to='privacy-policy'>Privacy Policy</Link>                        
            <Link style={{color: 'white'}} to='terms'>Terms & Conditions</Link>                                   
        </div> */}
        <div className="footer-madewith">
          Made with{" "}
          <span>
            <FaHeart className="footer_heart" />
          </span>{" "}
          Excel 2022
        </div>
      </div>
    </div>
  )
}

export default Footer
