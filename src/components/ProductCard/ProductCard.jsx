import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';
import ImgDefault from '../../assets/images/indisponivel.png';

import './ProductCard.scss';

const ProductCard = ({ productInfo }) => (
  <Link
    to={`/products/${slugify(productInfo.name)}?color=${
      productInfo.color_slug
    }`}
    className="product__card__container"
  >
    <div className="product__card__grid">
      <div className="product__card__item">
        <div className="product__card__image">
          <ul className="social">
            <li>
              <Link
                to={`/products/${slugify(productInfo.name)}?color=${
                  productInfo.color_slug
                }`}
              >
                <ion-icon name="add-circle-outline"></ion-icon>
              </Link>
            </li>
          </ul>
          {productInfo.image === '' ? (
            <img src={ImgDefault} />
          ) : (
            <img src={productInfo.image} />
          )}
        </div>
        {productInfo.discount_percentage === '' ? null : (
          <div>
            <span className="product__card__trend__label">Promoção</span>
            <span className="product__card__discount__label">
              {productInfo.discount_percentage}
            </span>
          </div>
        )}
      </div>
      <div className="product__card__content">
        <span className="product__card__title">{productInfo.name}</span>
        <div className="product__card-price discount">
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
