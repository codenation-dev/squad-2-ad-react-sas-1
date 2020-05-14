import React from 'react';

import ProductCard from '../../components/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="container__products" data-testid="product-list">
      <section className="product-list">
        {products &&
          products.map((product) => <ProductCard productInfo={product} />)}
      </section>
    </div>
  );
};

export default ProductList;
