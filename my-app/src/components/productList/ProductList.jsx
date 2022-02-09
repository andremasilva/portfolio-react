import React from 'react';
import "./productList.css"
import Product from "../product/Product"
import { products } from '../../data';

const ProductList = () => {
  return (
  <div className='pl'>
    <div className='ol-texts'> 
      <h1 className='pl-title'> Create & inspire. It's André</h1>
      <p className='pl-desc'> Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. Explicabo 
      nobis consectetur labore. Quasi sapiente nostrum mollitia praesentium!
      sse fuga omnis dolores impedit, 
      </p>
    </div>
       <div className="pl-list">
           {products.map((item)=>(
             <Product key={item.id} img={item.img} link ={item.link}/>
           ))}
       </div>
  </div>
  )
};

export default ProductList;
