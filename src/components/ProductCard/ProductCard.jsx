import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.scss";

const ProductCard = ({ productInfo }) => {
  const {
    name,
    discount_percentage,
    regular_price,
    actual_price,
    image,
  } = productInfo;

  return (
    <div className="product__card__container">
      <div className="product__card__grid">
        <div className="product__card__image">
          <Link to={`/products/${name}`}>
            <img className="pic__1" src={image} alt={name} />
          </Link>
          <span className="product__card__trend__label">Promoção</span>
          <span className="product__card__discount__label">
            {discount_percentage}
          </span>
          <ul className="social">
            <li>
              <Link to={`/products/${name}`}>
                Detalhes
                <ion-icon name="cart"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
        <div className="product__card__content">
          <h3 className="title">
            <Link to={`/products/${name}`}>{name}</Link>
          </h3>
          <div className="price discount">
            <span>{regular_price}</span>
            {actual_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
