import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { getProductsRequest } from '../../actions/products';

import ProductList from '../../containers/ProductList';

import './ProductListRoute.scss';

const ProductListRoute = () => {
  // const [productList, setProductList] = useState([]);
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog').then(
      (res) => {
        dispatch(getProductsRequest(res));
        console.log('resposta', res);
      }
    );
    // .then((data) => setProductList(data));
    // SETAR A LISTA DE ITENS NO REDUX AQUI
    // NAO PASSAR OS DADOS VIA PROP
  }, []);
  if (products !== []) {
    console.log('products-list', products);
    return <ProductList products={products} />;
  } else {
    return;
  }
};

// const getProducts = () => {
//   fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
//     .then((res) => res.json())
//     .then((data) => setProductList(data));
//   // SETAR A LISTA DE ITENS NO REDUX AQUI
//   // NAO PASSAR OS DADOS VIA PROP
// };

export default connect(ProductListRoute);
