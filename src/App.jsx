import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen"; 
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";

import { BagProvider } from "./context/BagContext"; // Certifique-se de importar isso

import "./styles/global.css";
import Bag from "./pages/Bag";

export default function App() {
  return (
    <BagProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          
          <Route element={<Layout />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/bag" element={<Bag />} />
          </Route>
        </Routes>
      </Router>
    </BagProvider>
  );
}
