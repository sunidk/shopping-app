import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { count } = useCart();

  const onSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setResults(response.data))
      .catch((error) => console.log(error));
  };

  const filtered = query
    ? results.filter((product) =>
        product.title.toLowerCase().startsWith(query.toLowerCase())
      )
    : [];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="text-gradient">Cartly</span>
        </NavLink>

        <button
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-collapse ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>
            </li>
          </ul>

          <div className="navbar-search">
            <input
              value={query}
              onChange={onSearch}
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            {query && (
              <div className="search-results">
                {filtered.length === 0 ? (
                  <div className="search-result search-result--empty">No matches</div>
                ) : (
                  filtered.map((product) => (
                    <NavLink
                      to={`/productdetail/${product.id}`}
                      key={product.id}
                      className="search-result"
                      onClick={() => {
                        setQuery("");
                        setMenuOpen(false);
                      }}
                    >
                      {product.title}
                    </NavLink>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="navbar-actions">
            <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Cart</span>
              {count > 0 && <span className="cart-badge">{count}</span>}
            </NavLink>
            <NavLink to="/profile" className="profile-link" onClick={() => setMenuOpen(false)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
