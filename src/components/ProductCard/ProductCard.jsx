import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Indisponivel from '../../assets/images/indisponivel.png';

import ProductDetail from '../ProductDetail';

import './ProductCard.scss';

const ProductCard = ({ productInfo }) => {
  const history = useHistory();

  const clickHandle = () => {
    history.push(`/products/${productInfo.name}`, { productInfo });
  };
  // const {
  //   name,
  //   discount_percentage,
  //   regular_price,
  //   actual_price,
  //   image,
  // } = productInfo;

  // const helperSlug = (name, products) => {
  //   products.filter(item => {item.name === name});
  //   const slug = `/product-detail-${name}`
  // }

  // console.log('card', productInfo);
  console.log({ Indisponivel });

  return (
    <div className="product__card__container">
      <div className="product__card__grid">
        <div className="product__card__image">
          <Link to={`/products/${productInfo.name}`}>
            <img
              className="pic__1"
              src={productInfo.image === '' ? Indisponivel : productInfo.image}
              alt={productInfo.name}
            />
          </Link>
          <span className="product__card__trend__label">Promoção</span>
          <span className="product__card__discount__label">
            {productInfo.discount_percentage}
          </span>
          <ul className="social">
            <li>
              <h3>Detalhes</h3>
              <ion-icon name="cart" onClick={clickHandle} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
