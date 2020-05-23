import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Produto from '../../assets/img/img1.jpg';

import './Cart.scss';

const Cart = () => (


  <div className="cart__container">
    <div className="cart__painel">
      <div className="cart__header">
          
        <span className="cart__title">
        MINHA SACOLA
        </span>
        <Link to="/" className="cart__close" type="button" name="cart__close" >
          <ion-icon name="close-circle-outline"></ion-icon>
        </Link>
      </div>


      <ul className="cart__items_title">
       <li className="product__cart__info">Produto</li>
         <li className="product__cart__price">Preço</li>
         <li className="product__cart__qty">Quantidade</li>
         <li className="product__cart__total">Total</li>
       </ul>

      
      
      <div className="cart__content">
        <ul className="cart__items">
          <li className="cart__items-list">
            <div className="product__img">
            <img src={Produto}  />
            </div>
    
            <div className="product__info" >
              <p className="product__name">
                VESTIDO TRANSPASSE BOW
              </p>
              <p className="product__price-cart">
                  199,90
              </p>
              <div className="product__cart__qty">
              <div className="product__qty__remove">
                <div className="qty">
                <ion-icon className="remove" name="remove-circle"></ion-icon>
                  <div className="input-box">
                    2
                  </div>
                  <ion-icon className="add" name="add-circle"></ion-icon>
                </div>
                <div className="remove-cart">
                  <ion-icon name="trash-outline"></ion-icon>
                </div>
              </div>
            </div>
              <div className="product__info__price">
                <p className="product__price-cart">
                  199,90
                </p>
              <p className="product__installments">
              3X33,00
              </p>
              </div>
            </div> 
        </li>
      </ul>
    </div>

    <div className="cart__content">
        <ul className="cart__items">
          <li className="cart__items-list">
            <div className="product__img">
            <img src={Produto}  />
            </div>
    
            <div className="product__info" >
              <p className="product__name">
                VESTIDO TRANSPASSE BOW
              </p>
              <p className="product__price-cart">
                  199,90
              </p>
              <div className="product__cart__qty">
              <div className="product__qty__remove">
                <div className="qty">
                <ion-icon className="add" name="add-circle"></ion-icon>
                  <div className="input-box">
                    2
                  </div>
                  <ion-icon className="remove" name="remove-circle"></ion-icon>
                </div>
                <div className="remove-cart">
                  <ion-icon name="trash-outline"></ion-icon>
                </div>
              </div>
            </div>
              <div className="product__info__price">
                <p className="product__price-cart">
                  199,90
                </p>
              <p className="product__installments">
              3X33,00
              </p>
              </div>
            </div> 
        </li>
      </ul>
    </div>
  </div>

<div className="cart__checkout">

  <tr className="cart__totals">
        <td className="cart__totals-subtotal">
          <span className="cart__totals__title">Total S/ Desconto</span>
          <span className="price"> R$399,80</span>
        </td>
        <td className="cart__totals-total">
          <span className="cart__totals__title">Total C/ Desconto</span>
          <span className="price"> R$299,80</span>
        </td>
        
  </tr>
  <button className="button__checkout" title="checkout">FINALIZAR COMPRA</button>
  </div>
</div>


 
  
);
   
     
   

    
  


export default Cart;
