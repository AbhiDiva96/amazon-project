import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {

const [{basket},dispatch] = useStateValue();

// console.log("This is the basket >>>", basket);
const addTobasket = () => {
  //dispatch the item into the data layer
  dispatch({
    type: "ADD_TO-BASKET", 
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
};


  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating).fill().map((_, i) => (
              <StarIcon className='starIcon'/>
            ))}
        
       
        </div>

        <img src={image} alt="" />

        <button onClick={addTobasket}> Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
