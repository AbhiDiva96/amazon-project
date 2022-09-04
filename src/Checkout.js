import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js"

function Checkout() {
  const [{basket,user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
     <div className="checkout_left">
        <img
         className='checkout_ad'
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

       
      <h5>Hello,{user ? 
        <p>{user?.email}</p> : 
        <p>Guest</p>}</h5>
        <div>
            <h2 className="checkout_title">Your shoping Basket</h2>
             
             {basket.map(item => (
               <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}  
               />
             ))}
            {/* checkoutProduct */}
         </div>
        </div>   

      <div className="checkout_right">
       <Subtotal />
      </div>

    </div>
  )
}

export default Checkout 
