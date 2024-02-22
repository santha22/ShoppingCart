import React from 'react'
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from '../context/filter_context';

const Products = () => {
  const { filter_products } = useFilterContext();
  // console.log("filterproducts", filter_products);
  // console.log(filter_products[0]);
  return (
    <div className='cotainer'>
      <div className="row">
          <div className='col-lg-2 my-3'>
            <FilterSection />
          </div>

          <div className='col my-3 product-view-sort'>
            <div className="d-flex flex-row-reverse px-4 sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </div>


      </div>


      
    </div>
  )
}

export default Products;
