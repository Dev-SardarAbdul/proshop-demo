import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductDetails from "./pages/productsDetailPage";
import Topbar from "./components/navbar";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
