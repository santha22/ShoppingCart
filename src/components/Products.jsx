import React from 'react'
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';

const Products = () => {
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
