import { combineReducers } from 'redux';

// Importa os estados de cada reducer separadamente
import { productsReducer } from './products';
import { searchReducer } from './search';
// import { appReducer } from './app';

// unifica todas as stores em uma única store global
const rootReducer = combineReducers({
  // appInfo: appReducer,
  products: productsReducer,
  search: searchReducer,
});

export default rootReducer;
