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
    payload: { products: [...payload] },
  };
};

// export const FETCH_API = (URL) => ({
//   type: productsActionTypes.FETCH_API,
//   payload: {
//     products: productsList,
//   },
// });

// export const addItem = (text) => ({
//   type: productsActionTypes.ADD_ITEM,
//   payload: {
//     id: nextID++,
//     text: text,
//   },
// });

// export const deleteTodo = (id) => ({
//   type: productsActionTypes.DELETE_ITEM,
//   payload: {
//     id,
//   },
// });
