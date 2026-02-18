import React from 'react'
import './NewsLetter.css'

const NewsLatter = () => {
   return (
      <>
      <div className="news_letter">
         <h1>get exclusive offers on your email</h1>
         <p>subscribe to our newsletter and stay updated</p>
         <div className="email">
            <input type="email" name="email" id="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
         </div>
      </div>
      </>
   )
}

export default NewsLatter