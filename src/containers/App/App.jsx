import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../../containers/Navbar';
import Footer from '../../components/Footer';
import Search from '../../components/Search';

import Routes from '../../routes';

import './App.scss';

{
  /* import { PersistGate } from 'redux-persist/integration/react'; */
}

{
  /* import { store, persistor } from '../../store'; */
}

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <div data-testid="app">
        <Router>
          <Navbar />
          <Search />

          <Routes />

          <Footer />
        </Router>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
