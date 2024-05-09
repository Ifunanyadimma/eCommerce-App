import {useContext} from 'react'
import { SuperMarketContext } from '../../Contex/SuperMarketContext'
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(SuperMarketContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p> <b>{productName}</b>
        </p>
        <p>#{price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
        </button>
    </div>
  )
}
