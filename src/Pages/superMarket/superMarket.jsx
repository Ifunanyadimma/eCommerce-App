import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product'
import './superMarket.css';

export const SuperMarket = () => {
  return ( 
  <div className='superMarket'>
    <div className='title'>
        <h1>Fausty_Yummy SuperMarket</h1>
    </div>
    <div className='products'>
        {PRODUCTS.map((product) => (
        <Product data={product}/>
    ))} 
    </div>
  </div>
    );
}
