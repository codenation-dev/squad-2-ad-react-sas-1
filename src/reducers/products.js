import { productsActionTypes } from '../constants/products';

const INITIAL_STATE = {
  selectedProduct: {},
  selectedProductSize: {},
  products: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, products, selectedProduct, selectedProductSize } = action;
  switch (type) {
    case productsActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products,
      };

    case productsActionTypes.PRODUCT_DETAIL:
      return {
        ...state,
        selectedProduct,
      };

    //   return {
    //     item: [...state.all, item].filter((item) => item.name),
    //   };

    default:
      return state;
  }
};
