import React from 'react'
import FormatPrice from '../Helper/FormatPrice';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, name, image, price, amount }) => {
    const { removeItem,setDecrease, setIncrease } = useCartContext();
    
    return (

        <div className='container mx-5'>
            <div className="row cart_image--name">
                <div className='col'>
                    <figure>
                        <img width={"30%"} src={image} alt={id} />
                    </figure>

                    <div className='col'>
                        <p>{name}</p>

                    </div>
                </div>


                {/* price  */}
                <div className="col cart-hide">
                    <p>
                        <FormatPrice price={price} />
                    </p>
                </div>
                

                {/* quantitiy */}
                <div className='col'>
                    <div className="d-flex">
                        <button onClick={() => setDecrease(id)}>
                            <FaMinus />
                        </button>
                        <div className='px-1'> {amount} </div>
                        <button onClick={() => setIncrease(id)}>
                            <FaPlus />
                        </button>

                    </div>
                </div>

                {/* subtotal  */}
                <div className="col cart-hide">
                    <p>
                        <FormatPrice price={price * amount} />
                    </p>
                </div>

                {/* remvoe  */}
                <div className="col">
                    <FaTrash style={{cursor: "pointer"}} onClick={() => removeItem(id)}/>
                </div>
            </div>

        </div>
    )
}

export default CartItem;
