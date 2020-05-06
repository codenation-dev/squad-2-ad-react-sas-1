import React, { useState } from "react";
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar'  
import Search from "../components/Search/Search";
import ProductListRoute from "./ProductListRoute";
//import ProductPageRoute from "./ProductPageRoute";



export default function Nav() {
  const [ isOpenSearch, setIsOpenSearch ] = useState(false);


return (
  <Router>
    { isOpenSearch &&
      <Search closeSearch={() => setIsOpenSearch(false)} />
    }
    
    <Navbar openSearch={() => setIsOpenSearch(true)} />
  

    <Switch>
      <Route exact path="/">
        <ProductListRoute />
      </Route>


      {/* <Route path="/products/:product">
        <ProductPageRoute />
      </Route> */}
    </Switch>
  </Router>
);}
