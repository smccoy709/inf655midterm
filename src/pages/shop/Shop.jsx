import React, { useState } from 'react';
import { Products } from '../../Products';
import { Product } from './Product';
import './shop.css';

export const Shop = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='shop'>
        {/* Creating the search textbox and utilizing an onChange event to search for products in the store that have the letters entered */}
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
            <div className='shopTitle'>
                <h1>Scotty's Retro Video Games</h1>
            </div>
            <div className='products'>
            {/* Filtering the results (values (val)) to see if there was something searched */}
            {/* If the search term is equalted to no search terms, display everything in the store */}
            {/* Else if, the search term had values that are within the product's name, display only those products */}
            {/* Else, display no results when a result doesn't match a product's name within the store */}
            {
            Products
              .filter((val) => {
                if(searchTerm == "") {
                  return val;
                } else if (val.productName?.toLowerCase().includes(searchTerm?.toLowerCase())) {
                  return val;
                }
              })
              .map((product) => {
                {/* Display all the products that are in the store by returning the Product component within the shop directory */}
                return (
                    <Product data={product} />
                )
              })
          }
            </div>
        </div>
    );
};