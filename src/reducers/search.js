import { productsActionTypes } from '../constants/products';
import { slugify } from '../modules/slugify';

const INITIAL_STATE = {
  isSearchOpen: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case productsActionTypes.TOGGLE_SEARCH:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };

    case productsActionTypes.CLOSE_SEARCH:
      return {
        ...state,
        isSearchOpen: false,
      };

    default:
      return state;
  }
};
