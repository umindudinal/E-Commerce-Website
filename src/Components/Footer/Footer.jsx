import React from 'react'
import './Footer.css'
import footer_ogo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
   return (
      <>
      <div className="footer">
         <div className="footer_logo">
            <img src={footer_ogo} alt="Logo" />
            <p>shopper</p>
         </div>
         <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer_social_icon">
            <div className="footer_icon_container">
               <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer_icon_container">
               <img src={pintester} alt="Pinterest" />
            </div>
            <div className="footer_icon_container">
               <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
         </div>
         <div className="footer_copyright">
            <p> &copy; 2024 Shopper. All rights reserved.</p>
         </div>
      </div>
      </>
   )
}

export default Footer