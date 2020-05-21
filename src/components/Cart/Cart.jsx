import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../assets/img/banner.jpg';

import './Cart.scss';

const Cart = () => (
  <div className="cart__container">
    <header>
      <h2>Meu Carrinho</h2>
    </header>
    <main className="cart__info">
      <section className="cart__products">
        <div className="product__card__container">
          <div className="product__card__grid">
            <div className="product__card__image">
            <img src={Produto} />
            </div>
            <div className="product__card__content">
              <h3 className="title">
                <Link to="/">nome</Link>
              </h3>
              <div className="price discount">
                <span>regular_price</span>
                actual_price
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart__summary">
        <h3>Resumo da compra</h3>
        <div className="cart__summary_purchase">
          <img />
        </div>
      </section>
    </main>
  </div>
);

export default Cart;
