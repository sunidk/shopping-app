import React, { useState } from "react"; //importing React and useState Hook
import axios from "axios"; //importing axios
import { NavLink } from "react-router-dom"; //importing NavLink

function Navbar() {
  const [value, setValue] = useState(""); //setting initial state of value as empty string
  const [data, setData] = useState([]); //setting initial state of data as empty array

  //Function Component for getting Search Results when user type in search box
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
    // {Navbar starts}
    <div id="navbar">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <img
                src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-com-brand-png-0.png"
                alt=""
                className="ms-3"
                width="150px"
              />
              <li className="nav-item mx-5">
                {/* {Navigation link to Home Component} */}
                <NavLink to={"/"}>
                  <h5
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                {/* {Navigation link to Products Component} */}
                <NavLink to={"/products"}>
                  <h5 className="nav-link text-light">Products</h5>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                value={value}
                className="form-control me-5"
                onChange={onSearch}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* {Navigation link to Cart Component} */}
              <NavLink to={"/cart"}>
                <button className="btn btn-light ms-5" type="submit">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      height="23px"
                      alt=""
                    />
                    <span id="cart" className="ms-2 fw-bold">
                      Cart
                    </span>
                  </div>
                </button>
              </NavLink>
            </form>
            {/* {Navigation link to Profile Component} */}
            <NavLink to={"/profile"}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1458/1458201.png"
                className="me-4 ms-5"
                width="40px"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </nav>
      {/* {Navbar Ends} */}

      {/* {displaying all the possible product list related to searchTerm} */}
      <div className="dropdown" id="search">
        {data
          .filter((product) => {
            const searchTerm = value.toLowerCase();
            const title = product.title.toLowerCase();
            return searchTerm && title.startsWith(searchTerm);
          })
          .map((product) => {
            return (
              <div className="dropdown-row" key={product.id}>
                {product.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Navbar;
