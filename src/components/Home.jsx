import React from 'react'
import { useProductcontext } from '../context/productContext';
import FeatureProduct from './FeatureProduct';

const Home = () => {

  const {myName} = useProductcontext();
  return (
    <div>
      {myName}
      <FeatureProduct />
    </div>
  )
}



export default Home;
