import React, { useState } from 'react';
import { Products } from '../../Products';
import { Product } from './Product';
import './shop.css';

export const Shop = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='shop'>
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
            <div className='shopTitle'>
                <h1>Scotty's Retro Video Games</h1>
            </div>
            <div className='products'>
            {
            Products
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.productName?.toLowerCase().includes(searchTerm?.toLowerCase())){
                  return val;
                }
              })
              .map((product) => {
                return(
                    <Product data={product} />
                )
              })
          }
            </div>
        </div>
    );
};