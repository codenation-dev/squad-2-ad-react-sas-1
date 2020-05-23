import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';

import ImgDefault from '../../assets/images/indisponivel.png';
import './ProductDetailSearch.scss';

const ProductDetailSearch = ({ product }) => (
  <Link
    to={`/products/${slugify(product.name)}?color=${product.color_slug}`}
    className="search__description"
  >
    <div className="product__img">
      {product.image === '' ? (
        <img src={ImgDefault} className="indisponivel" />
      ) : (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '70px', height: '70px' }}
        />
      )}
    </div>

    <div className="product__info">
      <p className="product__name">{product.name}</p>
      <div className="product__info__price">
        <p className="product__price-search">{product.actual_price}</p>
        <p className="product__installments">{product.installments}</p>
      </div>
    </div>
  </Link>
);

export default ProductDetailSearch;
