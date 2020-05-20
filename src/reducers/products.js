import { productsActionTypes } from '../constants/products';
import { slugify } from '../modules/slugify';

const INITIAL_STATE = {
  products: [],
  lastRequest: null,
  product: {}, // mudar para catalogo
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
      // logica da busca por slug(name) + color-slug

      const { slug, color } = payload;
      const catalog = state.products;
      return {
        ...state,
        product: catalog.find(
          ({ name, color_slug }) =>
            slugify(name) === slug && color_slug === color
        ),
      };

    //   return {
    //     item: [...state.all, item].filter((item) => item.name),
    //   };

    default:
      return state;
  }
};
