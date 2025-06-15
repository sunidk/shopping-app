import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Footer = lazy(() => import("./Footer"));

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons mb-5">
          <button className="btn btn-outline-dark me-2" onClick={showAllProducts}>
            All
          </button>
          <button className="btn btn-outline-dark me-2" onClick={showMensProducts}>
            {category[2]}
          </button>
          <button className="btn btn-outline-dark me-2" onClick={showWomensProducts}>
            {category[3]}
          </button>
          <button className="btn btn-outline-dark me-2" onClick={showJeweleryProducts}>
            {category[1]}
          </button>
          <button className="btn btn-outline-dark me-2" onClick={showElectronicsProducts}>
            {category[0]}
          </button>
        </div>

        {data.map((products) => (
          <div key={products.id} className="col-md-3 d-inline-block mb-3" style={{ width: "18rem" }}>
            <div className="card h-100 text-center px-4 py-3 mx-3">
              <NavLink to={`/productdetail/${products.id}`}>
                <img
                  src={products.image}
                  className="card-img-top"
                  height="220px"
                  alt={products.title}
                />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {products.title.substring(0, 12)}...
                </h5>
                <p className="card-text lead fw-bold">Rs.{products.price}/-</p>
                <NavLink to={`/productdetail/${products.id}`}>
                  <button className="btn btn-dark">Buy Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showAllProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  };

  const showMensProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        setData(response.data);
      });
  };

  const showWomensProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => {
        setData(response.data);
      });
  };

  const showJeweleryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setData(response.data);
      });
  };

  const showElectronicsProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12">
            <h1>High Range of Products</h1>
          </div>
        </div>
      </div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Products;
