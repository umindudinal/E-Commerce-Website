import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offers = () => {
   return (
      <>
         <div className="offers">
            <div className="offer_left">
               <h1>Exclusive</h1>
               <h1>Offers for You</h1>
               <p>only one best sellers product</p>
               <button>Click Now</button>
            </div>
            <div className="offer_right">
               <img src={exclucive_image} alt="Exclusive Offer" />
            </div>
         </div>
      </>
   )
}

export default Offers