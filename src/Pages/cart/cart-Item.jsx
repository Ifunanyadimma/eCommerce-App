import React, {useContext} from 'react'
import './cart.css'
import { SuperMarketContext } from '../../Contex/SuperMarketContext';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(SuperMarketContext);

  return (
  <div className='cartItem'>
    <img src={productImage} />
    <div className='description'>
        <p>
            <b> {productName} </b>
    </p>
    <p> #{price} </p>
    <div className='countHandler'>
      <button onClick={() => removeFromCart(id)}> - </button>
      <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
      <button onClick={() => addToCart(id)}> + </button>
    </div>
    </div>
  </div>
  );
};
