import { productsActionTypes } from '../constants/products';

const INITIAL_STATE = {
  products: [],
  product: {}, // mudar para catalogo
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case productsActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: payload,
      };

    case productsActionTypes.PRODUCT_DETAIL:
      // logica da busca por slug(name) + color-slug
      const { slug, color } = payload;
      const catalog = state.products;
      return {
        ...state,
        product: catalog.find(
          ({ name, color_slug }) => name === slug && color_slug === color
        ),
      };

    //   return {
    //     item: [...state.all, item].filter((item) => item.name),
    //   };

    default:
      return state;
  }
};
