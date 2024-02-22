import React from 'react'
import CardItem from './CardItem';

const GridView = ({products}) => {
    
  // console.log("products", products);
  return (
    <div className='container'>
        <div className="row">
            {
                products.map((curEle) => {

                    return <div className='col-md-4' key={curEle.id}>
                                <CardItem key={curEle.id} {...curEle} />
                            </div> 
                    
                })
            }
        </div>
    </div>
  )
}

export default GridView;
