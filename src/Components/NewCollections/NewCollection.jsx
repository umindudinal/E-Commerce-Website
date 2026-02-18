import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
   return (
      <>
      <div className="new_collection">
         <h1>New Collection</h1><hr />
         <div className="collection">
            {new_collection.map((item, i) => {
               return <Item key={i} id={item.id} name={item.name} image={item.image} price_new={item.new_price} price_old={item.old_price} />
            })}
         </div>
      </div>
      </>
   )
}

export default NewCollection