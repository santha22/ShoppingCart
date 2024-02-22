import React from 'react'
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { sorting } = useFilterContext();
  return (
    <div className='sort-selection'>
      <form action="#">
        <label htmlFor='sort'></label>
        <select name='sort' id="sort" className='sort-selection-style' onClick={sorting}>
          <option value="lowest">Price(lowest)</option>
          {/* <option value="#" disabled></option> */}
          <option value="highest">Price(highest)</option>
          {/* <option value="#" disabled></option> */}
          <option value="a-z" >Price(a-z)</option>
          {/* <option value="#" disabled></option> */}
          <option value="z-a">Price(z-a)</option>
        </select>
      </form>

      
    </div>
  )
}

export default Sort;