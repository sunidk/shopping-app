import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";

const Home = lazy(() => import("./Components/Home"));
const Products = lazy(() => import("./Components/Products"));
const Cart = lazy(() => import("./Components/Cart"));
const Profile = lazy(() => import("./Components/Profile"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/shoppingapp">
        <Navbar />
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
