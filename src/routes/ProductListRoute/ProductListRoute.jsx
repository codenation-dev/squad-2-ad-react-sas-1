import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../services/products';
import { getProductsRequest } from '../../actions/products';

import ProductList from '../../containers/ProductList';

import './ProductListRoute.scss';
import { useEffect } from 'react';

const ProductListRoute = () => {
  const dispatch = useDispatch();

  const handleGet = () => {
    getProducts().then((data) => dispatch(getProductsRequest(data)));
  };

  useEffect(() => {
    handleGet();
  });

  return <ProductList />;
  // if (products !== []) {
  // } else {
  //   return;
  // }
};

// const getProducts = () => {
//   fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
//     .then((res) => res.json())
//     .then((data) => setProductList(data));
//   // SETAR A LISTA DE ITENS NO REDUX AQUI
//   // NAO PASSAR OS DADOS VIA PROP
// };

export default ProductListRoute;
