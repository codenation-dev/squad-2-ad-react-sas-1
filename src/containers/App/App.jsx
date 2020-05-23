import React from 'react';
import { store, persistor } from '../../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../../containers/Navbar';
import Footer from '../../components/Footer';
import Search from '../../components/Search';

import Routes from '../../routes';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div data-testid="app">
          <Router>
            <Navbar />
            <Search />

            <Routes />

            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
