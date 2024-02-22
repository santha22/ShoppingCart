import React from 'react';
import CartItem from './CartItem';
import { useCartContext } from '../context/cart_context';
import {NavLink} from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log("cart", cart);

  if(cart?.length === 0) {
    return <div>
      <h3>No Cart in Item </h3>
    </div>
  }

  return (
    <div className='my-3'>
       <div className="container">
        <div className="d-flex justify-content-around cart_heading">
          <p>Item</p>
          <p className='cart-hide'>Price</p>
          <p>Quantity</p>
          <p className='cart-hide'>Subtotal</p>
          <p>Remove</p>
        </div>

        <div className="cart-item">
          {
            cart?.map((curElem) =>{
              return <CartItem key={curElem.id} {...curElem} />
            })
          }
        </div>

        <div className="d-flex justify-content-end cart-two-button">
          <div className='me-2'>
            <NavLink to='/products'>
              <button className='btn btn-success'>Continue Shopping</button>
            </NavLink>
          </div>

          <div className='me-2'>
            <button type='btn' className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
          </div>
        </div>

       </div>

      <div className="conatainer my-5 me-5 order-total--amount">
        <div className="d-flex justify-content-end  order-total--subdata">
          <div className="d-flex flex-column">
            <div className='d-flex'>
              <p>subtotal: </p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>

            <div className='d-flex'>
              <p>shipping fee: </p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>

            <hr />
            <div className='d-flex'>
              <p>order total: </p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;





