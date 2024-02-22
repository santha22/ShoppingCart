import React from 'react'
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';

const ProductList = () => {
  
  const { filter_products, setGridView } = useFilterContext();
  
  // console.log("productlist", filter_products);
  if(setGridView) {
    return (
      <div className='container'>
        <GridView products={filter_products} />
      </div>
    )
    

  }
}

export default ProductList
