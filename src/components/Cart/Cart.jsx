import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../assets/img/img1.jpg';

import './Cart.scss';

const Cart = () => (
  <div className="cart__container">
    <header>
      <h2>MINHA SACOLA</h2>
    
      <ul className="cart__items_title">
        <li className="product__cart__info">Produto</li>
        <li className="product__cart__price">Preço</li>
        <li className="product__cart__qty">Quantidade</li>
        <li className="product__cart__total">Total</li>
      </ul>
    </header>

    <tr className="cart__products">
      <td className="product__cart__image">
        <img src={Produto} />
      </td>
      <td className="product__cart__info">
        <h2>Produto</h2>
      </td>
      <td className="product__cart__price">
        <span className="price">R$199,90</span>
      </td>
      <td className="product__cart__qty">
        <div className="product__qty__remove">
          <div className="qty">
          <ion-icon className="add" name="add-circle"></ion-icon>
            <div className="input-box">
              2
            </div>
            <ion-icon className="remove" name="remove-circle"></ion-icon>
          </div>
          <div className="remove">
            REMOVER
          </div>
        </div>
      </td>
      <td className="product__cart__subtotal">
        <span className="product__cart__price">
          <span className="price">R$199,90</span>
          <div className="installments">
            10x de R$19,90
          </div>
        </span>
      </td>
    </tr>

    <tr className="cart__products">
      <td className="product__cart__image">
        <img src={Produto} />
      </td>
      <td className="product__cart__info">
        <h2>Produto</h2>
      </td>
      <td className="product__cart__price">
        <span className="price">R$199,90</span>
      </td>
      <td className="product__cart__qty">
        <div className="product__qty__remove">
          <div className="qty">
          <ion-icon className="add" name="add-circle"></ion-icon>
            <div className="input-box">
              2
            </div>
            <ion-icon className="remove" name="remove-circle"></ion-icon>
          </div>
          <div className="remove">
            REMOVER
          </div>
        </div>
      </td>
      <td className="product__cart__subtotal">
        <span className="product__cart__price">
          <span className="price">R$199,90</span>
          <div className="installments">
            10x de R$19,90
          </div>
        </span>
      </td>
    </tr>

   
      <tr className="cart__totals">
        <td className="cart__totals-subtotal">
          <span className="cart__totals__title">Total</span>
          <span className="price">R$399,80</span>
        </td>
        <td className="cart__totals-total">
          <span className="cart__totals__title">Total</span>
          <span className="price">R$399,80</span>
        </td>
        <button className="cart__checkout" title="FINALIZAR COMPRA"></button>
      </tr>
   

    
  </div>
);

export default Cart;
