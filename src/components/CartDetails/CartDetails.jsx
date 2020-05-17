import React from "react";

import Cart from "../../containers/Cart";

const CartDetails = () => {
  return (
    <Cart>
      <>
        <header>
          <h2>Olá Carrinho!!!</h2>
        </header>
        <section className="cart__products">
          <h3>Produtos adicionados</h3>
          <ul>
            <li>Item 1</li>
          </ul>
        </section>
      </>
    </Cart>
  );
};

export default CartDetails;
