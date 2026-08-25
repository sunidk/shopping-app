import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import "./ProductDetail.css";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

const Footer = lazy(() => import("./Footer"));

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting loading/added on id change is intentional
    setLoading(true);
    setAdded(false);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail">
      <div className="container">
        {loading || !product ? (
          <div className="page-loading">Loading...</div>
        ) : (
          <div className="detail-grid">
            <div className="detail-image-wrap">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="detail-info">
              <span className="eyebrow">{product.category}</span>
              <h1 className="detail-title">{product.title}</h1>
              {product.rating && (
                <p className="detail-rating">
                  ★ {product.rating.rate}{" "}
                  <span className="detail-rating-count">({product.rating.count} reviews)</span>
                </p>
              )}
              <p className="detail-price">₹{formatINR(product.price)}</p>
              <p className="detail-description">{product.description}</p>
              <div className="detail-actions">
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  {added ? "Added ✓" : "Add to Cart"}
                </button>
                <NavLink to="/cart">
                  <button className="btn btn-ghost">Go to Cart</button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default ProductDetail;
