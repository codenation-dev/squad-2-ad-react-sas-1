import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Loading from "../Loading/Loading";

import './Search.scss';

function Search() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [ isOpenSearch, setIsOpenSearch ] = useState(false);

  
  useEffect(() => {
    //setLoading(true);
    axios
      .get("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <aside className="search__overlay">
      <div className="search__sidebar" >
        <div className="search__header">
          
          <span className="search__title"> Busca <input type="text" onChange={e => setSearch(e.target.value)}/></span>
            <button className="search__close" type="button" name="search__close" 
            onClick={ () => setIsOpenSearch(!isOpenSearch) }>
              X
            </button>
        </div>
        
        <div className="search__content">
          <ul className="search__items">
            <li className="search__items-list">
            {filteredProducts.map((product, idx) => (
             <ProductDetailSearch key={idx} {...product} />
            ))}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

const ProductDetailSearch = props => {
  const { name, image, actual_price } = props;
  return (
    <div className="search__description">
      <div className="product__img">
        <Link to="#" className="product__name">
          <img src={image} alt={name} style={{ width: "70px", height: "70px" }} />
        </Link>
      </div>
      <div className="product__info">
        <Link to="#" className="product__name">{name}</Link>
        <Link to="#" className="product__price">{actual_price}</Link>
      </div>
    </div>
  );
};

export default Search;