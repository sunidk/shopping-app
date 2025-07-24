import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const onSearch = (e) => {
    setValue(e.target.value);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-com-brand-png-0.png"
              alt="Logo"
              width="120"
              className="d-inline-block align-text-top"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink to="/" className="nav-link text-light">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/products" className="nav-link text-light">
                  Products
                </NavLink>
              </li>
            </ul>
            <form
              className="d-flex me-3"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                value={value}
                className="form-control me-2"
                onChange={onSearch}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <NavLink to="/cart">
                <button className="btn btn-light" type="button">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      height="23px"
                      alt="Cart"
                    />
                    <span id="cart" className="ms-2 fw-bold">
                      Cart
                    </span>
                  </div>
                </button>
              </NavLink>
            </form>
            <NavLink to="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1458/1458201.png"
                className="me-2"
                width="40px"
                alt="Profile"
              />
            </NavLink>
          </div>
        </div>
      </nav>
      {value && (
        <div
          className="dropdown"
          id="search"
          style={{ position: "absolute", zIndex: 1000, width: "100%" }}
        >
          {data
            .filter((product) => {
              const searchTerm = value.toLowerCase();
              const title = product.title.toLowerCase();
              return searchTerm && title.startsWith(searchTerm);
            })
            .map((product) => (
              <div
                className="dropdown-row bg-white px-3 py-2 border-bottom"
                key={product.id}
              >
                {product.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
