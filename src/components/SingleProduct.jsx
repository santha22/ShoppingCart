import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductcontext } from '../context/productContext';
import FormatPrice from '../Helper/FormatPrice'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import MyImage from './MyImage';
import Star from './Star';
import AddToCart from './AddToCart';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const {getSingleProduct, singleProduct} = useProductcontext();
  // console.log(singleProduct);
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;
  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);

  }, []);

  return (
    <div className='container my-3'>
      <div className="row d-flex justify-content-center">
          <div className='col'>
            <MyImage image={image}/>
          </div>

          <div className='col'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            
            <p className='product-data-price'>
              MRP: 
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <div>
              <p className='product-data-price product-data-real-price'>
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p> {description} </p>

              <div className='row'>
                <div className="col">
                  <TbTruckDelivery />
                  <p>Free Delivery</p>
                </div>

                <div className="col">
                  <TbReplace /> 
                  <p>30 Days Replacement Delivery</p>
                </div>

                <div className="col">
                  <TbTruckDelivery />
                  <p>Delivered</p>
                </div>

                <div className="col">
                  <MdSecurity />
                  <p>2 Year Warranty</p>
                </div>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available: 
                <span>
                  {stock > 0 ? "In stock" : "Not Available"} 
                </span>
              </p>

              <p>
                ID : <span> {id} </span>
              </p>

              <p>
                Brand : <span> {company} </span>
              </p>
            </div>

            {/* <hr style={{maxWidth: "100%", width: "90%", border: "0.1rem solid #000", color: "red"}}/> */}
            { stock > 0 && <AddToCart product={singleProduct} />}
          </div>
            
      </div>
    </div>
  )
}

export default SingleProduct;
