import React from 'react'
import './About.css'
import UserIcon from '../../Assets/UserIcon.png'
const AboutUs = () => {
  return (
    <div className='AboutUS'>
      <button className='test'>Testimonials</button>
      <h1>What’s our user <span>says</span> <br /> about us</h1>
      <div className="comment">
        <img src={UserIcon} alt="" />
        <div className="text">
                <h6>David J. Karem</h6>
                <p>Businessmen 1 day ago</p>
                <p>Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
