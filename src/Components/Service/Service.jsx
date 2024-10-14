import React from 'react';
import './Services.css';
import iconOne from '../../Assets/iconOne.png';
import iconTwo from '../../Assets/iconTwo.png';
import iconThree from '../../Assets/iconThree.png';

const Service = () => {
  return (
    <div className='service'>
      <button className='services'>Services</button>
      <h1>See our services for <br /> secure your <span>Data</span></h1>
      <p>Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.</p>
      <div className="carts">
        <div className="cart">
          <img src={iconOne} alt='Service 1' />
          <h2>Personal Information Removal</h2>
          <p>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
          <span className="explore">Explore More ➔</span>
        </div>
        <div className="cart">
          <img src={iconTwo} alt='Service 2' />
          <h2>Cloaking Alias Profiles</h2>
          <p>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
          <span className="explore">Explore More ➔</span>
        </div>
        <div className="cart">
          <img src={iconThree} alt='Service 3' />
          <h2>Virtual Identities Security</h2>
          <p>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
          <span className="explore">Explore More ➔</span>
        </div>
      </div>
    </div>
  );
}

export default Service;
