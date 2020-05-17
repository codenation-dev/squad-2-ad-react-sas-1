import React from 'react';

import './ProductList.scss';

import ProductCard from '../../components/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="container__products" data-testid="product-list">
      <section className="product__list">
        {products &&
          products.map((product) => <ProductCard productInfo={product} />)}
      </section>
    </div>
  );
};

export default ProductList;
