import React from 'react'
import './Footer.css'
import NavPic from '../../Assets/NavPic.png'
import X from '../../Assets/X.png'
import Insta from '../../Assets/Insta.png'
import Tely from '../../Assets/Tely.png'
import Face from '../../Assets/Face.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <h1>Be part of the future of IdentityHub</h1>
      <p>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
      <button className='Footer_button'>Start a free trial</button>
      <div className="footer_top">
        <div className="Ident">
        <img src={NavPic} alt="" /> <h3>IdentityHub
        </h3>
        </div>
       
        <ul> 
        <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#about">About Us</a></li>
        </ul>
      </div>
      <div className="footer_buttom">
        <p>© identityhub 2024. All rights reserved</p>
        <div className="social">
            <img src={X} alt="" />
            <img src={Insta} alt="" />
            <img src={Tely} alt="" />
            <img src={Face} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
