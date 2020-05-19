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

  console.log('card', productInfo);

  return (
    <div className="product__card__container">
      <div className="product__card__grid">
        <div className="product__card__image">
          <Link to={`/products/${productInfo.name}`}>
            <img
              className="pic__1"
              src={productInfo.image}
              alt={productInfo.name}
            />
          </Link>
          <span className="product__card__trend__label">Promoção</span>
          <span className="product__card__discount__label">
            {productInfo.discount_percentage}
          </span>
          <ul className="social">
            <li onClick={clickHandle}>
              Detalhes
              <ion-icon name="cart" />
            </li>
          </ul>
        </div>
        <div className="product__card__content">
          <h3 className="title">
            <Link onClick={clickHandle} to={`/products/${productInfo.name}`}>
              {productInfo.name}
            </Link>
          </h3>
          <div className="price discount">
            <span>{productInfo.regular_price}</span>
            {productInfo.actual_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
