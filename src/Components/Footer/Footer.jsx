import React from 'react'
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/Logo.png';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='overlay'>
      <img src={logo} alt="" />
      <div className="social-links">
        <h3>We Are Social</h3>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p>&#169; 2014-<span>Kasper</span> All Right Reserved</p>
    </footer>
  )
}

export default Footer;