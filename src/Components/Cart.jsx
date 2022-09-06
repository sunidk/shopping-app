import React from "react"; //importing React
import { NavLink } from "react-router-dom"; //importing NavLink
import Footer from "./Footer"; //importing Footer Component

function Cart() {
  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-11">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">Rs. 44.00/-</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">Rs. 44.00/-</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="text-black mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">Rs. 44.00/-</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times"></i>
                            </a>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-3 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 3</h5>
                          <h5>Rs. 132.00/-</h5>
                        </div>

                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Select Payment Method</option>
                            <option value="2">Cash</option>
                            <option value="3">Card</option>
                            <option value="4">UPI</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea2">
                              Enter your Address
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>Rs. 132.00/-</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark py-2 px-3 me-3"
                          data-mdb-ripple-color="dark"
                        >
                          Buy Now
                        </button>
                        {/* {Navigation link to Products component} */}
                        <NavLink to={"/products"}>
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-mdb-ripple-color="dark"
                          >
                            Back to Shop
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {Adding Footer component} */}
      <Footer />
    </div>
  );
}

export default Cart;
