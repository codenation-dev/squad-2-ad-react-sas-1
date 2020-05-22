// criar TOGLE_SEARCH
// CRIAR STATUS_SEARCHBAR
// CRIAR STATUS_CART

const INITIAL_STATE = {
  isSearchOpen: false,
  isCartOpen: false,
  searchVisible: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case appActionTypes.TOOGLE_SEARCH:
      return {
        ...state,
        isOpenSearch: !isOpenSearch,
      };

    case appActionTypes.STATUS_SEARCH:
  }
};
