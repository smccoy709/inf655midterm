import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    {/* Getting the products and putting them as props */}
    {/* Getting the addToCart and cartItems variables from the ShopContext component */}
    {/* Setting the cartItemCount to the amount of times the "Add to Cart" button was clicked by the product's id */}
    const { id, productName, description, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
        <div className='product'>
            {/* Displaying the product's image in the store */}
            <img src={productImage} alt='Classic gaming cartridges' />
            <div className='description'>
            {/* Displaying the product name, description, and price of the products in the store */}
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
            {/* Displaying the "Add to Cart" button and when clicked, the item goes into the shopping cart */}
            {/* Once the button is clicked, it displays the quantity in the cart within parentheses (for example, Add to Cart (2)) */}
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};