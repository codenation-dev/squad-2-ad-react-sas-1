import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';

import './ProductCard.scss';

const ProductCard = ({ productInfo }) => (
  <Link className="product__card__container">
    <div className="product__card__grid">
      <div className="product__card__item">
        {/* <p
          to={`/products/${slugify(productInfo.name)}?color=${
            productInfo.color_slug
          }`}
        > */}
          {productInfo.image && (
            <img
              className="product__card__image"
              src={productInfo.image}
              alt={productInfo.name}
            />
          )}
        {/* </p> */}
        <span className="product__card__trend__label">Promoção</span>
        <span className="product__card__discount__label">
          {productInfo.discount_percentage}
        </span>
        <ul className="social">
          <li><Link to={`/products/${productInfo.name}`}><ion-icon name="add-circle-outline"></ion-icon></Link></li>
          <li><ion-icon name="cart-outline"></ion-icon></li>
        </ul>
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
