import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductListRoute from './ProductListRoute';
import ProductRoute from './ProductRoute';
import Search from '../components/Search/Search';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <ProductListRoute />
    </Route>

    <Route exact path="/search">
      <Search />
    </Route>

<<<<<<< HEAD
    <Route exact path="/cart">
      <Cart />
=======
    <Route path="/product/:id">
      <ProductRoute />
>>>>>>> f6dd10ea03256c705d561a329815bcbd8c9ad0ee
    </Route>
  </Switch>
);

export default Routes;
