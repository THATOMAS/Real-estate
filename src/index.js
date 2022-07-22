import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MarketPlace from "./routes/MarketPlace"
import News from "./routes/News"


const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <Router>
    <Routes>
    <Route path="/" element={<App />} />
     <Route path='/MarketPlace' element={<MarketPlace/>}/>
     <Route path='/News' element={<News/>}/>
    </Routes>
  </Router>
);

