import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
     <div className="home_container">
    
    {/* crousal image */}

        <img 
        className="home_image"
        src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" alt=""  />

    {/* //product */}

<div className="home_row">
        <Product title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback] Paperback"
        id="454785559"
        price={29.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
        <Product 
        id="256586686"
        title= "ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94"
        price={1999}
        rating={4}
        image="https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SX679_.jpg"
        />       
        </div> 
<div className="home_row">
     <Product 
     id="604785559"
      title="Covergirl Lash Blast Volume Mascara, Volumizing Mascara, Black, Pack of 2"
      price={15.67}
      rating={4}
      image="https://m.media-amazon.com/images/I/715Md8kj36L._SX466_.jpg"
     />
      <Product
      id="454785856" 
       title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
       price={24.99}
       rating={3}
       image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX679_.jpg"
       />
        <Product 
        id="784785559"
        title="3Plus Smart Watch Built-in Fitness Tracker with Heart Rate and Blood Oxygen Monitor,Sleep Monitor Waterproof"
        price={25.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61I0BAo0ulL._AC_SY450_.jpg"
        />
        <Product
        id="689785559" 
        title="WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress"
        price={58.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61+PeVsOHbL._AC_SY550._SX._UX._SY._UY_.jpg"
        />
        </div>
<div className="home_row">
        <Product
        id="802785559" 
        title="TJOY 50ft Bluetooth LED Strip Lights, Music Sync 5050 LED Light Strip RGB Color Changing LED Lights Strip with Phone Remote, LED Lights for Bedroom Kitchen"
        price={19.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/81L6p8+MYaL._AC_SX466_.jpg"
        />
        </div>   
        <div className="home_row">
        <Product
        id="802785559" 
        title="TJOY 50ft Bluetooth LED Strip Lights, Music Sync 5050 LED Light Strip RGB Color Changing LED Lights Strip with Phone Remote, LED Lights for Bedroom Kitchen"
        price={19.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/81L6p8+MYaL._AC_SX466_.jpg"
        />
        <Product 
        id="784785559"
        title="3Plus Smart Watch Built-in Fitness Tracker with Heart Rate and Blood Oxygen Monitor,Sleep Monitor Waterproof"
        price={25.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61I0BAo0ulL._AC_SY450_.jpg"
        />
        <Product 
        id="784785559"
        title="3Plus Smart Watch Built-in Fitness Tracker with Heart Rate and Blood Oxygen Monitor,Sleep Monitor Waterproof"
        price={25.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61I0BAo0ulL._AC_SY450_.jpg"
        />
        </div>         
     </div>
    </div>
  )
}

export default Home
