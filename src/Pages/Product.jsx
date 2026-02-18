import React, { useContext } from 'react'
import './CSS/Product.css'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
   const {all_products} = useContext(ShopContext);
   const {productId} = useParams();
   const product = all_products.find((e) => e.id ===  Number(productId));
   return (
      <>
      <Breadcrums product={product}/>
      </>
   )
}

export default Product