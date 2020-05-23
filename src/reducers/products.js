import { productsActionTypes } from '../constants/products';
import { slugify } from '../modules/slugify';

const INITIAL_STATE = {
  products: [], // mudar para catalog ou items
  lastRequest: null,
  product: {}, // mudar para catalogo
  cart: [],
  product: {},
  isOpenSearch: false,
  productCart: {},
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case productsActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: payload,
        lastRequest: new Date().getTime(),
      };

    case productsActionTypes.SET_PRODUCT_DETAIL:
      const { slug, color } = payload;
      const catalog = state.products;
      return {
        ...state,
        product: catalog.find(
          ({ name, color_slug }) =>
            slugify(name) === slug && color_slug === color
        ),
      };

    case productsActionTypes.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case productsActionTypes.SET_SIZE:
      const { size } = payload;
      const item = state.product;
      return {
        ...state,
        productCart: item.find(({ size }) => item.size === size),
      };

    default:
      return state;
  }
};
