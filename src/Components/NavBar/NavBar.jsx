import React from 'react';
import './NavBar.css';
import NavPic from '../../Assets/NavPic.png';

const NavBar = () => {
  return (
    <nav>
      <div className='nav_bar'>
        <div className="identityHub">
          <img src={NavPic} alt="IdentityHub Logo" />
          <h2>IdentityHub</h2>
        </div>

        <div className="element">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <button className='free'>Start free trial &gt;</button>
      </div>
    </nav>
  );
}

export default NavBar;
