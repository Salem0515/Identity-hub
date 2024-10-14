import React from 'react'
import './Features.css'
import scroling from '../../Assets/scrolling.png'
import scroling_green from '../../Assets/scrolingGreen.png'
import scroling_Violate from '../../Assets/scrolingViolet.png'
import checkmark from '../../Assets/checkmark.png'
import checkmark_Green from '../../Assets/checkmarkGreen.png'
import checkmark_Violate from '../../Assets/checkmarkViolet.png'
import picscollection from '../../Assets/picscollection.png'
import UserName from '../../Assets/UserName.png'
import EmailPhoto from '../../Assets/EmailPhoto.png'
import PassWord from '../../Assets/PassWord.png'
import Phone from '../../Assets/Phone.png'
import Card from '../../Assets/Card.png'
import Lock from '../../Assets/Lock.png'
import Seurity_lock from '../../Assets/security_lock.png'
import Matrix from '../../Assets/Matrix.png'



const Features = () => {
  return (
    <div className='Features'>
      <button className='Feat'>Features</button>
      <h1>Why <span>choose</span> us</h1>
      <h4>We are the only service that provides all 3 services as a packaged service</h4>
      <div className="panner">
        <div className="scroling">
        <img src={scroling} alt="" />
        </div>
        <div className="text">
            <h1>Protect Personal information</h1>
            <div className="checkMarks">
                <div className="checkMark">
                    <img src={checkmark} alt="" /> <p>The first step involves identifying all places where your personal information might be present.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark} alt="" /> <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark} alt="" /> <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark} alt="" /> <p>There are professional services and tools available that specialise in personal information removal.</p>
                </div>
            </div>
        </div>
        <div className="imges_1">
            <div className="leftHand">
            <img src={UserName} alt="" />
            <img src={EmailPhoto} alt="" />
            <img src={PassWord} alt="" />
            </div>
            <div className="rightHand">
            <img src={Phone} alt="" />
            <img src={Card} alt="" />
            <img src={Lock} alt="" />
            </div>

        </div>
      </div>
      <div className="panner">
        <div className="scroling">
            <img src={scroling_Violate} alt="" />
        </div>
        <div className="text">
            <h1>Detailed Reporting</h1>
            <div className="checkMarks">
                <div className="checkMark">
                    <img src={checkmark_Violate} alt="" /> <p>The first step involves identifying all places where your personal information might be present.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Violate} alt="" /> <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Violate} alt="" /> <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Violate} alt="" /> <p>There are professional services and tools available that specialise in personal information removal.</p>
                </div>
            </div>
        </div>
        <div className="imges_2">
        <img src={picscollection} alt="" />
           
        </div>
      </div>
      <div className="panner">
        <div className="scroling">
            <img src={scroling_green} alt="" />
        </div>
        <div className="text">
            <h1>Secure All Data</h1>
            <div className="checkMarks">
                <div className="checkMark">
                    <img src={checkmark_Green} alt="" /> <p>The first step involves identifying all places where your personal information might be present.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Green} alt="" /> <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Green} alt="" /> <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                </div>
                <div className="checkMark">
                    <img src={checkmark_Green} alt="" /> <p>There are professional services and tools available that specialise in personal information removal.</p>
                </div>
            </div>
        </div>
        <div className="imges">
         
            <img src={Seurity_lock} alt="" />
        </div>
      </div>
      <img className='matrix' src={Matrix} alt="" />
      </div>

  )
}

export default Features
