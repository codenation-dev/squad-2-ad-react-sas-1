import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { slugify } from '../../modules/slugify';
import { urlParser } from '../../modules/urlParser';

import Loading from '../Loading/Loading';
import ImgDefault from '../../assets/images/indisponivel.png';

import './Search.scss';

const Search = ({ productList }) => {
  const { handleClose } = productList;
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

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
              {products.length > 0 ? (
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
