import React from 'react'
import { useFilterContext } from '../context/filter_context';
import FormatPrice from '../Helper/FormatPrice';

const FilterSection = () => {
  const {filters: {text,  category, price, maxPrice, minPrice}, all_products, updateFilterValue, clearFilters} = useFilterContext();

  // to get unique data of each fileds 
  const getUniqueData = (data, property) => {
    let newval = data.map((curElem) => {
      return curElem[property];
    });

    return (newval = ["all", ...new Set(newval)]);
    
  }

  // we need unique data 
  const categoryOnlyData = getUniqueData(all_products, "category");
  // console.log("CATEGORYDATA",categoryOnlyData);
  return (
    <div>
      <div className='filter-section px-3'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            name='text'
            value={text}
            onChange={updateFilterValue}
            placeholder='search'
          />
        </form>
      </div>

      <div className="container my-3 filter-category">
        <h3>Category</h3>
        <div className='row d-flex flex-column'>
          {
            categoryOnlyData.map((curElem, ind) => {
              return <div className='col py-1' key={ind}>
              <button
                className='btn btn-light'
                key={ind}
                type='button'
                name='category'
                value={curElem}
                onClick={updateFilterValue}
                >{curElem}</button>
              </div>
            })
          }
        </div>
      </div>

      <div className="filter-price px-3">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input 
          type='range'
          name='price'
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      
    </div>
  )
}

export default FilterSection;
