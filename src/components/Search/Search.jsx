import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSearch } from '../../actions/products';

import ProductDetailSearch from '../../components/ProductDetailSearch';
import Loading from '../Loading/Loading';

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
    dispatch(toggleSearch(isOpen));
    setFilteredProducts(
      productList.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, productList, isOpen]);

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
            onClick={() => handleClose(isOpen)}
          >
            X
          </button>
        </div>

        <div className="search__content">
          <ul className="search__items">
            <li className="search__items-list">
              {productList.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <ProductDetailSearch
                    key={idx}
                    {...product}
                    productList={productList}
                  />
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

export default Search;
