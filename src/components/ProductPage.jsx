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
    <div className="product-page">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductPage;
