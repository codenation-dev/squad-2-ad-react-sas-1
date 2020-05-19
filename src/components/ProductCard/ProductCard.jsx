import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { productDetail } from '../../actions/products';

import './ProductCard.scss';

const ProductCard = ({ productInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandle = () => {
    dispatch(productDetail(productInfo));
    history.push(`/products/${productInfo.name}`);
  };

  return (
    <div className="product__card__container">
      <div className="product__card__grid">
        <div className="product__card__item">
          <Link to={`/products/${productInfo.name}`}>
            {productInfo.image && (
              <img
                className="product__card__image"
                src={productInfo.image}
                alt={productInfo.name}
              />
            )}
          </Link>
          <span className="product__card__trend__label">Promoção</span>
          <span className="product__card__discount__label">
            {productInfo.discount_percentage}
          </span>
        </div>
        <div className="product__card__content">
          <h3 className="title">
            <Link onClick={clickHandle} to={`/products/${productInfo.name}`}>
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
    </div>
  );
};

export default ProductCard;
