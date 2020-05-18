import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductListRoute from './ProductListRoute';
import ProductRoute from './ProductRoute';
import Search from '../components/Search/Search';
import Cart from '../components/Cart';
import ProductDetail from '../components/ProductDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <ProductListRoute />
    </Route>

    <Route exact path="/search">
      <Search />
    </Route>

    <Route exact path="/cart">
      <Cart />
    </Route>

    <Route path="/products/:id" component={props => <ProductDetail {...props}/> } />

  </Switch>
);

export default Routes;
