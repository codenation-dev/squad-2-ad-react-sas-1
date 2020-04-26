import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import './Search.scss';


function Search() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Busca</h1>
      <input
        type="text"
        placeholder=" "
        onChange={e => setSearch(e.target.value)}
      />
      {filteredProducts.map((product, idx) => (
        <ProductDetail key={idx} {...product} />
      ))}
    </div>
  );
}



const ProductDetail = props => {
  const { name, image, actual_price } = props;
  return (
    <div className="search">
      <p className="product__name">
        <img src={image} alt={name} style={{ width: "40px", height: "40px" }} />
      </p>
      <p className="product__price">{actual_price}</p>
      <hr/>
    </div>
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Search />, rootElement);


export default Search;