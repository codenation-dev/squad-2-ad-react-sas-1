import React from "react";

import "./ProductDetail.scss";

class ProductDetail extends React.Component {
  render() {

    return (

      <div className="product">

        <div className="product__title">
          <h2>Nome do produto</h2>
        </div>

        <div className="product__body">

          <div className="product__image">

            <img src="https://source.unsplash.com/500x600" className="display-img" alt="nome do produto" />

            <div className="icon-images">





              <img src="https://source.unsplash.com/500x600" alt="nome do produto" />
              <img src="https://source.unsplash.com/500x600" alt="nome do produto" />
              <img src="https://source.unsplash.com/500x600" alt="nome do produto" />

            </div>

          </div>

          <div className="product__details">

            <div className="product__price">
              <span className="product__price_price">R$ 100,00</span>
              <span className="product__price_offer">Novo</span>
            </div>

            <div className="product__desc">
              <p>VESTIDO CURTO MANGA BUFANTE é o vintage anos 80, super queridinho. Ideal para um look de festa com muito estilo. Esse vestido curto é feito em material acetinado e tem caimento justo ao corpo com detalhes franzidos, manga curta bufante e decote quadrado, você vai amar! ATENÇÃO: Cuidado ao lavar esta peça pois pode soltar tinta.</p>
            </div>

            <div className="product__size">
              <span>P</span>
              <span className="active">M</span>
              <span>G</span>
            </div>

            <div className="product__quantity">
              <input className="quantity" type="number" placeholder="quantity" min="1" max="10" value="1"></input>
            </div>

            <div className="add__cart">
              <button className="btn__cart">comprar</button>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default ProductDetail;
