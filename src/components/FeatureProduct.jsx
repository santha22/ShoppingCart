import React from 'react'
import { useProductcontext } from '../context/productContext';
import CardItem from './CardItem';

const FeatureProduct = () => {
 
    const {isLoading, featureProducts } = useProductcontext();
    // console.log("featureProducts", featureProducts);

    if(isLoading) {
        return <div> ..... Loading</div>
    }
  return (
    <div className='container'>
      <div className="row">
        {
            featureProducts?.map((curEle) => {
                return <div className="col" key={curEle.id}>
                    <CardItem key={curEle.id} {...curEle}/>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default FeatureProduct;
