import React from 'react';

import './App.scss';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search';
import Footer from './components/Footer';
import Cart from './containers/Cart';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <ProductCard />

        <ProductDetail />

        <Search />

        <Cart />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
