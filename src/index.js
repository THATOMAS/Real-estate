import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MarketPlace from "./routes/MarketPlace"
import ForSale from './routes/ForSale'
import ForRent from './routes/ForRent'
import Developments from './routes/Developments'



const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
     <Route path='/MarketPlace' element={<MarketPlace/>}>
        <Route index element={<ForSale/>} />
        <Route path='/MarketPlace/ForRent' element={<ForRent/>} />
        <Route path="/MarketPlace/Developments" element={<Developments/>} />
      </Route>      
    </Routes>
  </Router>,
  rootElement
);
