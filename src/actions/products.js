import { productsActionTypes } from '../constants/products';
/*
 * Action Creators
 */

/**
 * @returns {{products: *, type: string}}
 */
export const getProductsRequest = (products) => {
  return {
    type: productsActionTypes.GET_PRODUCTS_REQUEST,
    products,
  };
};

export const productDetail = (selectedProduct) => {
  return {
    type: productsActionTypes.PRODUCT_DETAIL,
    selectedProduct,
  };
};
