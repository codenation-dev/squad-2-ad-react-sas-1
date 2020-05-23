import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../Search';

import { ReactComponent as FashionistaLogo } from '../../assets/images/fashionista-logo.svg';
import './Navbar.scss';
import { Link } from 'react-router-dom';


function Navbar() {
  const [searchStatus, setSearchStatus] = useState(false);
  const handleClick = () => setSearchStatus(true);
  const handleOpenSearch = () => setSearchStatus(false);
  
  const cartItems = useSelector((state) => state.products.cart);

  {/* console.log(cartItems.length); */}

  useEffect(() => {

  }, []);

  const handleClose = (searchStatus) => {
    setSearchStatus(!searchStatus);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <nav className="navbar__wrapper">
          <div className="navbar__logo__wrapper">
            <Link to="/" className="navbar__logo__link">
              <FashionistaLogo
                className="navbar__logo__img"
                alt="Fashionista Store"
              />
            </Link>
          </div>

          <div className="navbar__menu">
            <button className="navbar__item" onClick={handleClick}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
            {searchStatus && (
              <Search onClick={handleOpenSearch} handleClose={handleClose} />
            )}

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
