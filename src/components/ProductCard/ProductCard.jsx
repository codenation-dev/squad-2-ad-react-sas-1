import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';

import './ProductCard.scss';

<<<<<<< HEAD
const ProductCard = ({ productInfo }) => (
  <div className="product__card__container">
    <div className="product__card__grid">
      <div className="product__card__item">
        <Link
          to={`/products/${slugify(productInfo.name)}?color=${
            productInfo.color_slug
          }`}
        >
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
        <ul className="social">
          <li>
            <h3>Detalhes</h3>
            <ion-icon name="cart" />
          </li>
        </ul>
      </div>
      <div className="product__card__content">
        <h3 className="title">
          <Link to={`/products/${productInfo.name}`}>{productInfo.name}</Link>
        </h3>
        <div className="price discount">
          {productInfo.regular_price == productInfo.actual_price ? null : (
            <span>{productInfo.regular_price}</span>
          )}
          {productInfo.actual_price}
=======
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
>>>>>>> 6192b39d76b58ab82eb9c695f46b87075aec88fb
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
