import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                {/* Link the nav bar on the main page to the defaulted homepage for "Shop" and to the shopping cart page using a linked
                shopping cart image */}
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />
                </Link>
            </div> 
        </div>
    );
};