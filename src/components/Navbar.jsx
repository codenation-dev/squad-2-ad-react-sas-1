import React from "react";

import { ReactComponent as FashionistaLogo } from "../assets/images/fashionista-logo.svg";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    const cartItems = ["t-shirt", "shorts"];

    return (
      <header className="navbar">
        <div className="navbar__container">
          <nav className="navbar__wrapper">
            <div className="navbar__logo__wrapper">
              <a className="navbar__logo__link" href="index.html">
                <FashionistaLogo
                  className="navbar__logo__img"
                  alt="Fashionista Store"
                />
              </a>
            </div>

            <div className="navbar__menu">
              <div className="navbar__item">
                <ion-icon name="search-outline"></ion-icon>
              </div>

              <div className="navbar__item">
                <ion-icon name="cart-outline"></ion-icon>
                {cartItems.length > 0 && (
                  <span class="navbar__item__cart__item-count">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
          </nav>
        </div>
        {/* <section className="navbar__banner">
          <div className="container">
            <div className="navbar__text">
            </div>
          </div>
        </section> */}
      </header>
    );
  }
}

export default Navbar;
