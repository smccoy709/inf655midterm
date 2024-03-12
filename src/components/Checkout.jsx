import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";

export const Checkout = () => {
   const [num, setNum] = useState();
 
   const randomNumberInRange = (min, max) => {
       return Math.floor(Math.random()
           * (max - min + 1)) + min;
   };

   const handleClick = () => {
       setNum(randomNumberInRange(10000, 99999));
   };

   return (
       <div className='cart'>
           <div>
               <h1>Your Order Has Been Received!</h1>
           </div>
        <div>
        <h1>Order Confirmation</h1>
        <p>Your order has been received!  Please keep note of your order confirmation number in case of an issue with your
           products.  To see your confirmation number, click the button below to generate it for your records!
        </p>
        <h2>Your confirmation number is {num}</h2>
        <div className='confirmationButton'>
            <button onClick={handleClick}>
                Confirmation Number
            </button>
            </div>
            <div>
               <p>Click <a href='/'>here</a> to go back the homepage.</p>
            </div>
        </div>
        </div>
    )
}