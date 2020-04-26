import React from "react";
import "./ProductCard.scss";

class ProductCard extends React.Component {
  render() {
    return (
      <section className="product__card__container">
        <div class="container">
          <div className="product__card__grid">
            <div className="product__card__image">
              <a href="#">
                <img className="pic__1" src="https://source.unsplash.com/600x800" />
                <img className="pic__2" src="https://source.unsplash.com/600x800" />
              </a>
              <span className="product__card__trend__label">Promoção</span>
              <span className="product__card__discount__label">-20%</span>
              <ul className="social">
                <li>
                  <a href="#" data-tip="Add Carrinho">
                    <ion-icon name="cart"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip=" Favoritos">
                    <ion-icon name="heart"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product__card__content">
              <h3 className="title">
                <a href="#">Nome do Produto</a>
              </h3>
              <div className="price discount">
                <span>R$ORIGINAL</span>R$COMDESCONTO
              </div>
            </div>
          </div>

          <div className="product__card__grid">
            <div className="product__card__image">
              <a href="#">
                <img className="pic__1" src="https://source.unsplash.com/600x800" />
                <img className="pic__2" src="https://source.unsplash.com/600x800" />
              </a>
              <span className="product__card__trend__label">Promoção</span>
              <span className="product__card__discount__label">-20%</span>
              <ul className="social">
                <li>
                  <a href="#" data-tip="Add Carrinho">
                    <ion-icon name="cart"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip=" Favoritos">
                    <ion-icon name="heart"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product__card__content">
              <h3 className="title">
                <a href="#">Nome do Produto</a>
              </h3>
              <div className="price discount">
                <span>R$ORIGINAL</span>R$COMDESCONTO
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default ProductCard;
