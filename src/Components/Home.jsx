import { NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

const Products = lazy(() => import("./Products"));

function Home() {
  return (
    <div>
      <div className="card text-bg-light">
        <img
          src="https://img.freepik.com/premium-photo/amazed-woman-sitting-chair-showing-mobile-phone-shopping-bags-purple-background_74952-2531.jpg?w=996"
          height="450px"
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container text-light" id="home">
            <h5 className="card-title display-3 mb-3 fw-bolder">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-1">CHECK OUT ALL THE TRENDS</p>
            <NavLink to={"/products"}>
              <button type="button" className="btn btn-dark btn-rounded btn-lg">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading products...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}
export default Home;
