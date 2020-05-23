import { productsActionTypes } from '../constants/products';
/*
 * Action Creators
 */
/**
 * @returns {{payload: *, type: string}}
 */

export const toggleSearch = (isSearchOpen) => {
  return {
    type: productsActionTypes.TOGGLE_SEARCH,
    payload: {
      isSearchOpen,
    },
  };
};

export const openSearch = () => {
  return {
    type: productsActionTypes.OPEN_SEARCH,
    payload: {},
  };
};

export const closeSearch = () => {
  return {
    type: productsActionTypes.CLOSE_SEARCH,
    payload: {},
  };
};

export const getSearchStatus = () => {
  return {
    type: productsActionTypes.GET_SEARCH_STATUS,
    payload: {},
  };
};
