import './App.css';
import React, { useState, usestate } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Product } from "./Product";
import { Homepage } from "./Homepage"
import { Cart } from './Cart';
import { About } from './About';



const App = () => {
  const [cart, setcart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>


          <Route path="/" element={<Navigation  cart={cart}></Navigation>}>
            <Route index element={<Homepage></Homepage>}></Route>
            <Route path="product" element={<Product cart={cart} setcart={setcart}></Product>}></Route>

            <Route path="cart" element={<Cart cart={cart} setcart={setcart} />}></Route>
            <Route path="About" element={<About  />}></Route>

          </Route>
        </Routes>





      </BrowserRouter>



    </div>
  );
}

export default App;
