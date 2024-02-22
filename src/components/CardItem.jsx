import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const CardItem = (curEle) => {

    const { id, name, image, price, category } = curEle;
    
    return (

        <div className='my-3'>
            <NavLink to={`/singleproduct/${id}`}>
                <div className="card">
                    
                    <img className="card-img-top" src={image} alt="something" />

                    <div className="card-body">
                        <span className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
                            {category}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <h3 className='card-title'>{name}</h3>
                        <p className='card-text'>{<FormatPrice price={price} />}</p>

                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default CardItem;
