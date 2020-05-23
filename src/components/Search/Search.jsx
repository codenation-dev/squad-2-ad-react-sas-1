import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSearch } from '../../actions/search';
import { slugify } from '../../modules/slugify';

import ProductDetailSearch from '../../components/ProductDetailSearch';
import Loading from '../Loading/Loading';

import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state) => state.search.isSearchOpen);
  const products = useSelector((state) => state.products.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleClose = () => {
    dispatch(closeSearch());
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filteredData = products.filter(({ name }) =>
        slugify(name).includes(slugify(searchTerm))
      );

      setFilteredProducts(filteredData);
    }
  }, [searchTerm]);

  return (
    <aside className={`search__overlay ${isSearchOpen ? 'is-open' : ''}`}>
      <div className="search__sidebar">
        <div className="search__header">
          <span className="search__title">
            {' '}
            Busca{' '}
            <input
              type="text"
              placeholder="buscar produto ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
          <button
            className="search__close"
            type="button"
            name="search__close"
            onClick={handleClose}
          >
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </div>

        <div className="search__content">
          <ul className="search__items">
            <li className="search__items-list">
              {filteredProducts.map((product, idx) => (
                <ProductDetailSearch key={idx} product={product} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Search;
