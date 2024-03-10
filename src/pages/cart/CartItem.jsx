import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export const CartItem = (props) => {
    const { id, productName, description, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} alt='Classic gaming cartridges' />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <div className='countHandler'>
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