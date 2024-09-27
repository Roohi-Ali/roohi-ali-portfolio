import React from 'react'
import './NavBar.css'
import logo from '../../assets/logoR.png'

import { Link } from 'react-router-dom'

const NavBar = ({ onAboutClick }) => {
  return (
    <nav className="navbar">
        <div className='div-logo'><img src={logo} alt="logo" className='logo'/></div>
        <div className="navbar-menu">
            <Link to="/" className='menuLink'>Home</Link>
            <span onClick={onAboutClick} className='menuLink' style={{ cursor: 'pointer' }}>About</span> 
            <Link to="/portfolio" className='menuLink'>Portfolio</Link>
            <Link to="/resume" className='menuLink'>Resume</Link>
        </div>
        <div className='div-btn'><button className = 'menuBtn' onClick={() => window.location.href = 'mailto:roohi.shama@gmail.com'}>Contact Me</button></div>

    </nav>
  )
}

export default NavBar
