// src/components/ProductPage.js

import React from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const products = data.data;
  const product = products.find(product => product.id==id)
  if (!product) {
    return <div>Product not found{id}</div>;
  }

  return (
        <div className='mx-auto m-auto bg-gray-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4'>
        <div 
        
        className='bg-white h-auto border-[1px] rounded-md border-gray-300 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
        <div className="w-full h-auto flex items-center justify-center relative group">
          <img className='w-52 h-64 object-contain '
          src={product.image} 
         alt="ProductImage" />
          </div>
           <div className='px-4 bg-white flex flex-col gap-1 z-10"'>
           <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold'>
            {product.title.substring(0, 20)}</h2>
               {/* ---------Product Price ---------- */}
          <p className='text-lg text-gray-700 font-semibold'>
            ₹{product.price}</p>
           </div>
            <p className=" font-bodyFont text-lg">{product.description.substring(0, 100)}</p>

        </div>
        </div>

    // <div className="product-page">
    //   <h1>{product.title}</h1>
    //   <p>{product.description}</p>
    //   <img className='w-52 h-64 object-contain'
    //     src={product.image} 
    //     alt={product.title} />
    //   <p>Price: ₹{product.price}</p>
    // </div>
  );
};

export default ProductPage;
