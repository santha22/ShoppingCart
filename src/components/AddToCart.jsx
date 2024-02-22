import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext()
    const { id, stock } = product;
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
  return (
    <div>
          <div className='d-flex'>
              <button onClick={setDecrease}>
                  <FaMinus />
              </button>
              <div className='px-1'> {amount} </div>
              <button onClick={setIncrease}>
                  <FaPlus />
              </button>
          </div>
        
        <div className='d-flex my-3'>
        <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
        <button className="btn btn-primary">Add To Cart</button>
        </NavLink>
        </div>
      
    </div>
  )
}

export default AddToCart;
