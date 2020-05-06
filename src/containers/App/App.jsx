import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Routes from "../../routes";


  

  const App = () => {

    return(
    <div data-testid="app">
      <BrowserRouter>

        <Navbar />

        <Routes />

        <Footer />
      </BrowserRouter>
    </div>
  )};

  export default App

