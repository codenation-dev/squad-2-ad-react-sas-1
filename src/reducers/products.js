import { productsActionTypes } from '../constants/products';

const INITIAL_STATE = {
  products: [],
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case productsActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        ...payload,
      };

    case productsActionTypes.ADD_ITEM:
      const item = {
        id: payload.name,
      };

      return {
        item: [...state.all, item].filter((item) => item.name),
      };

    default:
      return state;
  }
};
