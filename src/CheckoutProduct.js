import React from 'react'
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id, image, title, price, rating}) {
 
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item form basket
       dispatch  ({
        type: 'REMOVE_FROM_BASKET',
        id: id,
       })

  }
  return (
    <div className='checkoutProduct'>

        <img 
        className="checkoutProduct_image"
        src={image}  />
         <div className="checkoutProduct_info">
        <p className='checkoutProduct_title'>{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
            {Array(rating).fill().map((_, i) => (
              <StarIcon className='starIcon'/>
            ))}

        </div>
      <button className='remove' onClick={removeFromBasket}>Remove Item</button>


        
      
        </div>
    </div>
  )
}

export default CheckoutProduct
