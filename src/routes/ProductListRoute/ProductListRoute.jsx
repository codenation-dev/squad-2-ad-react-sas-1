import React, { useState, useEffect } from "react";

import ProductList from "../../containers/ProductList";

import "./ProductListRoute.scss";

const ProductListRoute = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
      .then((res) => res.json())
      .then((data) => setProductList(data));
      // SETAR A LISTA DE ITENS NO REDUX AQUI
      // NAO PASSAR OS DADOS VIA PROP
  }, []);
  if (productList !== []) {
    return <ProductList products={productList} />;
  } else {
    return;
  }
};

export default ProductListRoute;
