import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CartProvider } from "./context/CartProvider";
import Navbar from "./Components/Navbar";

const Home = lazy(() => import("./Components/Home"));
const Products = lazy(() => import("./Components/Products"));
const Cart = lazy(() => import("./Components/Cart"));
const Profile = lazy(() => import("./Components/Profile"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter basename="/">
          <Navbar />
          <Suspense fallback={<div className="page-loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/productdetail/:id" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
