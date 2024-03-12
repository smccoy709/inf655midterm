import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const CartItem = (props) => {
    {/* Setting the products in the store as props */}
    {/* Getting the cart variables from ShopContext to add, remove, and update the shopping cart items */}
    const { id, productName, description, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            {/* Selecting the product's image to display in the cart when a user adds it to their cart */}
            <img src={productImage} alt='Classic gaming cartridges' />
            <div className='description'>
                {/* Showing the product name, description, and price in the cart when a product is selected from the homepage */}
                <p>
                    <b>{productName}</b>
                </p>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <div className='countHandler'>
                    {/* When "-" is selected, a quantity is removed from the cart when at 1 or decreased when 2 or more */}
                    {/* When "+" is clicked, the product's quantity is will be updated incremently */}
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};