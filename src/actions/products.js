import { productsActionTypes } from '../constants/products';
/*
 * Action Creators
 */
/**
 * @returns {{payload: *, type: string}}
 */
export const getProductsRequest = (payload) => {
  return {
    type: productsActionTypes.GET_PRODUCTS_REQUEST,
    payload,
  };
};

export const setProductDetail = ({ slug, color }) => {
  return {
    type: productsActionTypes.SET_PRODUCT_DETAIL,
    payload: {
      slug,
      color,
    },
  };
};

export const addItem = (payload) => {
  return {
    type: productsActionTypes.ADD_ITEM,
    payload,
  };
};

export const setSize = ({ size, sku }) => {
  return {
    type: productsActionTypes.SET_SIZE,
    payload: {
      size,
      sku,
    },
  };
};
