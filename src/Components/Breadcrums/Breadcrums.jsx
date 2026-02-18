import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow.png'
import Footer from '../Footer/Footer'

const Breadcrums = (props) => {
   const {product} = props;
   return (
   <>
   <div className="breadcrums">
      home <img src={arrow_icon} alt="" /> shop<img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
   </div>
   <Footer/>
   </>
   )
}

export default Breadcrums