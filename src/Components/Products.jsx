import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Products.css";
import { formatINR } from "../utils/currency";

const Footer = lazy(() => import("./Footer"));

function ProductSkeleton() {
  return (
    <div className="products-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="product-card skeleton" key={i}>
          <div className="skeleton-image" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  );
}

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting loading when the category filter changes is intentional
    setLoading(true);
    const url =
      activeCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(activeCategory)}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <div className="products-page">
      <div className="container">
        <h2 className="section-heading products-heading">High Range of Products</h2>

        <div className="category-filters">
          <button
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-pill ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <ProductSkeleton />
        ) : (
          <div className="products-grid">
            {data.map((product) => (
              <NavLink to={`/productdetail/${product.id}`} className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-body">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">Rs. {formatINR(product.price)}/-</p>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Products;
