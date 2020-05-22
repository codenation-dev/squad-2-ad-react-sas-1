import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { slugify } from '../../modules/slugify';
import { toggleSearch } from '../../actions/products';

import Loading from '../Loading/Loading';
import ImgDefault from '../../assets/images/indisponivel.png';

import './Search.scss';

const Search = ({ productList }) => {
  const isOpen = useSelector((state) => state.products.isOpenSearch);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleClose = (isOpen) => {
    dispatch(toggleSearch(isOpen));
    return !isOpen && <Link to="/" />;
  };

  useEffect(() => {
    setFilteredProducts(
      productList.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, productList]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <aside className="search__overlay">
      <div className="search__sidebar">
        <div className="search__header">
          <span className="search__title">
            {' '}
            Busca{' '}
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
          </span>
          <button
            className="search__close"
            type="button"
            name="search__close"
            onClick={handleClose}
          >
            X
          </button>
        </div>

        <div className="search__content">
          <ul className="search__items">
            <li className="search__items-list">
              {productList.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <ProductDetailSearch key={idx} {...product} />
                ))
              ) : (
                <Loading />
              )}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

const ProductDetailSearch = (productList) => {
  // const { name, image, actual_price, installments } = props;
  return (
    <Link
      to={`/products/${slugify(productList.name)}?color=${
        productList.color_slug
      }`}
      className="search__description"
    >
      <div className="product__img">
        {productList.image === '' ? (
          <img src={ImgDefault} className="indisponivel" />
        ) : (
          <img
            src={productList.image}
            alt={productList.name}
            style={{ width: '70px', height: '70px' }}
          />
        )}
      </div>

      <div className="product__info">
        <p className="product__name">{productList.name}</p>
        <div className="product__info__price">
          <p className="product__price-search">{productList.actual_price}</p>
          <p className="product__installments">{productList.installments}</p>
        </div>
      </div>
    </Link>
  );
};

export default Search;
