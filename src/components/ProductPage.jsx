// src/components/ProductPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useLoaderData();
  const products = data.data;
  const product = products.find(product => product.id==id)
  if (!product) {
    return <div>Product not found{id}</div>;
  }

  return (
        <div className='mx-auto m-auto bg-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 mt-3 item-center justify-center'>

        <div 
        className='bg-white h-auto item-center justify-center border-[1px] rounded-md border-gray-300 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
        <div className="w-full h-auto flex items-center justify-center relative group">
          <img className='w-52 h-64 object-contain '
          src={product.image} 
         alt="ProductImage" />
          </div>
           <div className='px-4 bg-white flex flex-col gap-1 z-10 items-center justify-center"'>
           <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold items-center justify-center'>
            {product.title.substring(0, 20)}</h2>
               {/* ---------Product Price ---------- */}
          <p className='text-lg text-gray-700 font-semibold items-center justify-center'>
            ₹{product.price}</p>
           </div>
            <p className=" font-bodyFont text-lg items-center justify-center">{product.description.substring(0, 100)}</p>
           <div className="text-yellow-500 flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    image: product.image,
                    quantity: 1,
                  })
                )
              }
              className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              Add to Cart
            </button>
          </div>

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
