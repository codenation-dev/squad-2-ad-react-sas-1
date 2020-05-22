import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';

import { toggleSearch } from '../../actions/products';

import ImgDefault from '../../assets/images/indisponivel.png';
import './ProductDetailSearch.scss';

const ProductDetailSearch = (productList) => {
  // const { name, image, actual_price, installments } = props;
  return (
    <Link
      to={`/products/${slugify(productList.name)}?color=${
        productList.color_slug
      }`}
      className="search__description"
    >
      <div className="product__img">
        {productList.image === '' ? (
          <img src={ImgDefault} className="indisponivel" />
        ) : (
          <img
            src={productList.image}
            alt={productList.name}
            style={{ width: '70px', height: '70px' }}
          />
        )}
      </div>

      <div className="product__info">
        <p className="product__name">{productList.name}</p>
        <div className="product__info__price">
          <p className="product__price-search">{productList.actual_price}</p>
          <p className="product__installments">{productList.installments}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetailSearch;
