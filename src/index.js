import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MarketPlace from "./routes/MarketPlace"
import News from "./routes/News"


const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
    <Route path="/" element={<App />} />
     <Route path='/MarketPlace' element={<MarketPlace/>}/>
     <Route path='/News' element={<News/>}/>
    </Routes>
  </Router>,
  rootElement
);
