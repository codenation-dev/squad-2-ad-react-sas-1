import React from 'react';
import { Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
import ProductListRoute from './ProductListRoute';
import ProductRoute from './ProductRoute';
import Search from '../components/Search/Search';
=======
import ProductListRoute from "./ProductListRoute";
//import ProductPageRoute from "./ProductPageRoute";
import Search from "../components/Search/Search";
>>>>>>> 87cbccaed9a2ce30e669f736d3c341ea61f93e95

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <ProductListRoute />
    </Route>

    <Route exact path="/search">
      <Search />
    </Route>

    <Route path="/product/:id">
      <ProductRoute />
    </Route>
  </Switch>
);

export default Routes;
