import { catalogoActionTypes } from '../constants/catalogo';
/*
 * Action Creators
 */

export const FETCH_API = (URL) => ({
  type: catalogoActionTypes.FETCH_API,
  payload: {
    products: productsList,
  },
});

export const addItem = (text) => ({
  type: todosActionTypes.ADD_ITEM,
  payload: {
    id: nextID++,
    text: text,
  },
});

export const deleteTodo = (id) => ({
  type: todosActionTypes.DELETE_TODO,
  payload: {
    id,
  },
});
