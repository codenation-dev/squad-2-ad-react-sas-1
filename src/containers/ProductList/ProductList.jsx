import React from 'react';
import { useSelector } from 'react-redux';

import './ProductList.scss';

import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="container__products" data-testid="product-list">
      <section className="product__list">
        {products &&
          products.map((product, idx) => (
            <ProductCard key={`${product.name}${idx}`} productInfo={product} />
          ))}
      </section>
    </div>
  );
};

export default ProductList;
