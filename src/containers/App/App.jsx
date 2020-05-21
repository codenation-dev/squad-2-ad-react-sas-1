import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Routes from '../../routes';


{/* import { PersistGate } from 'redux-persist/integration/react'; */}

{/* import { store, persistor } from '../../store'; */}

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <div data-testid="app">
          <Router>
            <Navbar />

            <Routes />

            <Footer />
          </Router>
        </div>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
