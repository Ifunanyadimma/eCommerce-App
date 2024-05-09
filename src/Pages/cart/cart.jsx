import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { SuperMarketContext } from '../../Contex/SuperMarketContext';
import { CartItem} from './cart-Item';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(SuperMarketContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div className='checkout'>
        <p> Subtotal: #{totalAmount} </p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button onClick={() => navigate('/')}> Checkout </button>
      </div>
      ) : (
      <h1> Your Cart is Empty</h1>
      )} 
    </div>
  );
};
