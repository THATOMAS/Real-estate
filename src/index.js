import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ViewHouses from "./routes/ViewHouses";
import AboutUs from "./routes/AboutUs";
import MarketPlace from "./routes/MarketPlace";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/HousesOnView" element={<ViewHouses />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/MarketPlace" element={<MarketPlace />} />
    </Routes>
  </Router>,
  rootElement
);
