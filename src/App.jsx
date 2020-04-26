import React from 'react';

import './App.scss';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search';
import Footer from './components/Footer';


class App extends React.Component{
  render() {
    return(
      <React.Fragment>

        <Navbar />
    
        <section class="outdoors__offers">
          <div class="container">
            <div class="outdoors__offers__grid">
              <div class="outdoors__offers__item">
                  <img src="assets/images/item_1.jpg" />
              </div>

              <div class="outdoors__offers__item">
                <img src="assets/images/item_1.jpg" />
              </div>

              <div class="outdoors__offers__item">
                <img src="assets/images/item_1.jpg" />
              </div>

              <div class="outdoors__offers__item">
                <img src="assets/images/item_1.jpg" />
              </div>

              <div class="outdoors__offers__item">
                <img src="assets/images/item_1.jpg" />
              </div>

              <div class="outdoors__offers__item">
                <img src="assets/images/item_1.jpg" />
              </div>
            </div>
          </div>
        </section>

        <ProductDetail />

        <Search />

        <Footer />

      </React.Fragment>
    )
  }
}


export default App;