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

export const productDetail = ({ slug, color }) => {
  return {
    type: productsActionTypes.PRODUCT_DETAIL,
    payload: {
      slug,
      color,
    },
  };
};
