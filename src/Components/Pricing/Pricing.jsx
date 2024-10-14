import React from 'react'
import './Pricing.css'
import Zero from '../../Assets/Zero.png'
import Nintynine from '../../Assets/Nintynine.png'
import Twintty from '../../Assets/Twitty.png'
import checkmarkViolet from '../../Assets/checkmarkViolet.png'
const Pricing = () => {
  return ( 
    <div className='pricing'> 
    <button className='btn'>Pricing</button>
      <h1>Our <span>Pricing</span> Package</h1>
      <div className="price_Plans">
        <div className="Basic">
          <h2>Basic</h2>
          <p>AI chatbot, personalized recommendationsAI chatbot, personalized recommendations</p>
          <img src={Zero} alt="" />
          <button className='Get_Started_1'>Get Started</button>
          <ul>
            <li><img src={checkmarkViolet} alt="" /><p>Type of threat</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Online presence</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Access to all modules</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Notability</p></li>
          </ul>
        </div>
        <div className="Premium">
        <h2>Premium</h2>
          <p>Advanced AI chatbot, priority support, analytics dashboard</p>
          <img src={Nintynine} alt="" />
          <button className='Get_Started_2'>Get Started</button>
          <ul>
            <li><img src={checkmarkViolet} alt="" /><p>Type of threat</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Online presence</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Access to all modules</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Notability</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Optimize existing websites</p></li>
          </ul>
        </div>
        <div className="Enterprise">
        <h2>Enterprise</h2>
          <p>AI chatbot, personalized recommendations</p>
          <img src={Twintty} alt="" />
          <button className='Get_Started_1'>Get Started</button>
          <ul>
            <li><img src={checkmarkViolet} alt="" /><p>Type of threat</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Online presence</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Access to all modules</p></li>
            <li><img src={checkmarkViolet} alt="" /><p>Notability</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
