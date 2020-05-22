import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../services/products';
import { getProductsRequest } from '../../actions/products';
import { setProductDetail } from '../../actions/products';

import { urlParser } from '../../modules/urlParser';

import Search from '../../components/Search';

import { ReactComponent as FashionistaLogo } from '../../assets/images/fashionista-logo.svg';
import './Navbar.scss';

const cartItems = [];

function Navbar() {
  const dispatch = useDispatch();
  const [searchStatus, setSearchStatus] = useState(false);
  const products = useSelector((state) => state.products.products);

  const handleClick = () => setSearchStatus(true);

  const handleOpenSearch = () => setSearchStatus(false);

  const handleGetProducts = () => {
    getProducts().then((data) => dispatch(getProductsRequest(data)));
  };

  const handleClose = (searchStatus) => {
    setSearchStatus(!searchStatus);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     const message = urlParser();

  //     dispatch(setProductDetail(message));
  //   } else {
  //     handleGetProducts();
  //   }
  // }, [products]);

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
              <Search
                onClick={handleOpenSearch}
                handleClose={handleClose}
                productList={products}
              />
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
