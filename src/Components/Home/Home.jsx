import React from 'react';
import './Home.css';
import Shiled from '../../Assets/Shilde.png';
import credit_card from '../../Assets/credit_card.png';
import productivity from '../../Assets/productivity.png';
import Phon from '../../Assets/Phon.png';
import Email from '../../Assets/Email.png';
import circle from '../../Assets/circle.png';

const Home = () => {
  return (
    <div className='Home'>
  
      <button className='Secure'>Secure Your Data</button>
      <h1>
        Identity-hub is a better way to achieve privacy
      </h1>
      <p>
        Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
      </p>

      <div className="buttons">
        <button className='trial'>Start Free Trial</button>
        <button className='use'>Use it Now</button>
      </div>

      <div className="pictures">
        <div className="left">
          <div className="up">
            <img src={Shiled} alt="Shield" />
            <p>One-time passcode <br /> Kas3345-r32</p>
          </div>
          <div className="down">
            <img src={credit_card} alt="Credit Card" />
            <p>Credit card <br /> 123 456 789 1243</p>
          </div>
        </div>
        <div className="center">
          <img className='main_pic' src={productivity} alt="Productivity" />
        </div>
        <div className="right">
          <div className="UP">
            <img src={Phon} alt="Phone" />
            <p>Phone numbers <br /> +1 (456) 453-3456</p>
          </div>
          <div className="DOWN">
            <img src={Email} alt="Email" />
            <p>Email address <br /> davidjx@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
