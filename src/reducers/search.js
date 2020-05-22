import { productsActionTypes } from '../constants/products';
import { slugify } from '../modules/slugify';

const INITIAL_STATE = {
  isSearchOpen: false,
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case productsActionTypes.TOGLE_SEARCH:
      return {
        ...state,
        isOpenSearch: !isOpenSearch,
      };

    default:
      return state;
  }
};
