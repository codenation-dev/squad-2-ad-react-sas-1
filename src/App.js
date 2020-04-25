import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCard />
      <ProductDetail />
    </div>
  );
}

export default App;
