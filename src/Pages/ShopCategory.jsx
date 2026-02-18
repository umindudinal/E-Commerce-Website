import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'

const ShopCategory = ({ banner, category }) => {
   const { all_products } = useContext(ShopContext);

   return (
      <>
      <div className="shop_category">
         <img className='shopcategory_banner' src={banner} alt={category} />
         <div className="shopcategory_indexsort">
            <p><span>Showing 1-12 </span>out of 36 products</p>
            <div className="shopcategory_sort">
               Sort by <img src={dropdown_icon} alt="dropdown icon" />
            </div>
         </div>
         <div className="shopcategory_products">
            {all_products.map((item, i) => {
               if (category === item.category) {
                  return <Item key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price}/>;
               }
               else {
                  return null;
               }
            })}
         </div>
         <div className="shopcategory_loadmore">
            <button>Load More</button>
         </div>
      </div>
      <Footer/>
      </>
   )
}

export default ShopCategory
