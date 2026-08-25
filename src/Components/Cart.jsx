import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

const Footer = lazy(() => import("./Footer"));

function Cart() {
  const { items, removeItem, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-page">
        <div className="container">
          {items.length === 0 ? (
            <div className="cart-empty">
              <h1 className="section-heading">Your cart is empty</h1>
              <p className="section-intro">Add something from the shop to see it here.</p>
              <NavLink to="/products">
                <button className="btn btn-primary">Browse Products</button>
              </NavLink>
            </div>
          ) : (
            <div className="cart-grid">
              <div className="cart-items">
                <div className="cart-items-header">
                  <h1 className="section-heading">Shopping Cart</h1>
                  <span className="cart-items-count">{items.length} items</span>
                </div>

                {items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} className="cart-item-image" alt={item.title} />
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.title}</p>
                      <p className="cart-item-meta">₹{formatINR(item.price)} each</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-item-qty">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-item-price">₹{formatINR(item.price * item.quantity)}</p>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3 className="cart-summary-title">Summary</h3>
                <div className="cart-summary-row">
                  <span>Items ({items.length})</span>
                  <span>₹{formatINR(total)}</span>
                </div>

                <select className="cart-select">
                  <option value="1">Select Payment Method</option>
                  <option value="2">Cash</option>
                  <option value="3">Card</option>
                  <option value="4">UPI</option>
                </select>

                <input type="text" className="cart-input" placeholder="Enter your address" />

                <div className="cart-summary-row cart-summary-total">
                  <span>Total</span>
                  <span>₹{formatINR(total)}</span>
                </div>

                <button className="btn btn-primary cart-checkout">Buy Now</button>
                <NavLink to="/products">
                  <button className="btn btn-ghost cart-back">Back to Shop</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Cart;
