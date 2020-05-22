import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../services/products';
import { getProductsRequest } from '../../actions/products';

import ProductList from '../../containers/ProductList';

import './ProductsRoute.scss';

const ProductsRoute = () => {
  const dispatch = useDispatch();

  const handleGetProducts = () => {
    getProducts().then((data) => dispatch(getProductsRequest(data)));
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return <ProductList />;
};

export default ProductsRoute;
