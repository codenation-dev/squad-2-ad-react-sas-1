import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';
import ImgDefault from '../../assets/images/indisponivel.png';

import './ProductCard.scss';

const ProductCard = ({ productInfo }) => (
  <Link className="product__card__container">
    <div className="product__card__grid">
      <div className="product__card__item">
        <Link to={`/products/${productInfo.name}`}>
          {productInfo.image === '' ? (
            <img src={ImgDefault} style={{width: "278.46px", height: "351.91px"}}/>
          ) : (
            <img src={productInfo.image}/>
          )}
        </Link>
        {/* <p
          to={`/products/${slugify(productInfo.name)}?color=${
            productInfo.color_slug
          }`}
        > */}
        
        <span className="product__card__trend__label">Promoção</span>
        <span className="product__card__discount__label">
          {productInfo.discount_percentage}
        </span>
      </div>
      <div className="product__card__content">
        <h3 className="title">
          <Link
            to={`/products/${slugify(productInfo.name)}?color=${
              productInfo.color_slug
            }`}
          >
            {productInfo.name}
          </Link>
        </h3>
        <div className="price discount">
          {productInfo.regular_price == productInfo.actual_price ? null : (
            <span>{productInfo.regular_price}</span>
          )}
          {productInfo.actual_price}
        </div>
      </div>
    </div>
  </Link>
);

export default ProductCard;
