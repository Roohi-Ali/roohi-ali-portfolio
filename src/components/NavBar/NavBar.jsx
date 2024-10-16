import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logoR.png'
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({ onAboutClick }) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on hamburger icon click
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };
const handleAboutClick = ()=>{
    navigate('/roohi-ali-portfolio/')
    // setTimeout(onAboutClick, 100);
    setTimeout(() => {
      onAboutClick();
      closeMenu(); // Close the menu after About is clicked
    }, 100);
}

  return (
    <nav>

      
        <>
          <div className='div-logo'><img src={logo} alt="logo" className='logo' /></div>
          <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Unicode for hamburger icon */}
      </div>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/roohi-ali-portfolio/" onClick={closeMenu} className='menuLink'>Home</Link>
            <span onClick={handleAboutClick} className='menuLink' style={{ cursor: 'pointer' }}>About</span>
            <Link to="/roohi-ali-portfolio/portfolio" onClick={closeMenu} className='menuLink'>Portfolio</Link>
            <Link to="/roohi-ali-portfolio/resume" onClick={closeMenu} className='menuLink'>Resume</Link>
          </div>
          <div className='div-btn'><button className='menuBtn' 
              onClick={() => {
                window.location.href = 'mailto:roohi.shama@gmail.com';
                closeMenu();
          }}>Contact Me</button></div>

        </>

      

    </nav>
  )
}

export default NavBar
