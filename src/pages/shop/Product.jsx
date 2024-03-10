import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const { id, productName, description, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} alt='Classic gaming cartridges' />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    {description}
                </p>
                <p>
                    ${price}
                </p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};