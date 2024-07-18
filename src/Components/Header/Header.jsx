import React from 'react'
import logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
const Header = () => {
  function togglebars(params) {
    let ul = document.querySelector('ul')
    let body = document.querySelector('section')
    ul.classList.toggle('active')
    body.addEventListener('click',()=>{
      ul.classList.remove('active')
    })
  }
  return (
    <header>
      <div className="header-head container">
        <div className="head-logo">
          <img src={logo} alt="" />
        </div>
        <nav className='head-links'>
            <FontAwesomeIcon className='bars' icon={faBars} onClick={togglebars} />
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        <div className="head-search">
          <input type="text" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Header