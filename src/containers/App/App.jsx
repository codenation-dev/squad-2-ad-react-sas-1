import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../../store';

import './App.scss';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Routes from '../../routes';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}>
      </PersistGate> */}
      <div data-testid="app">
        <Router>
          <Navbar />

          <Routes />

          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
