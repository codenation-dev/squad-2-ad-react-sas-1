import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as FashionistaLogo } from '../../assets/images/fashionista-logo.svg';
import './Navbar.scss';

const cartItems = ['t-shirt', 'shorts'];

function Navbar() {
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
            <button className="navbar__item">
              <Link to="/search">
                <ion-icon name="search-outline"></ion-icon>
              </Link>
            </button>

            <button className="navbar__item">
              <Link to="/cart">
                <ion-icon name="cart-outline"></ion-icon>
                {cartItems.length > 0 && (
                  <span className="navbar__item__cart__item-count">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
