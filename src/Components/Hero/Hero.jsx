import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
   return (
      <>
         <div className="hero">
            <div className="hero_left">
               <h2>New arrivals only</h2>
               <div className="hero_hand_icon">
                  <div className="hand_icon">
                     <p>new</p>
                     <img src={hand_icon} alt="Hand Icon" />
                  </div>
                  <p>collection</p>
                  <p>for everyone</p>
               </div>
               <div className="hero_latest_btn">
                  <div className="btn">Latest Collection</div>
                  <img src={arrow_icon} alt="Arrow Icon" />
               </div>
            </div>
            <div className="hero_right">
               <img src={hero_image} alt="Hero Image" />
            </div>
         </div>
      </>
   )
}

export default Hero