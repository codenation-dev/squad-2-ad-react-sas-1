import React from 'react';

import './App.scss';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <ProductCard />

        <ProductDetail />

        <Search />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
