import React from "react"; //importing React
import { useEffect, useState } from "react"; //importing useEffect and useState hooks
import axios from "axios"; //importing axios
import { NavLink } from "react-router-dom"; //importing Navlink
import Footer from "./Footer"; //importing Footer component

function Products() {
  const [data, setData] = useState([]); //setting initial state of data as empty array
  const [loading, setLoading] = useState(false); //setting initial state of loading as false
  const [category, setCategory] = useState([]); //setting initial state of category as empty array

  //Fetching API to get all the products
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Function component for showing Loading message while API is fetching
  const Loading = () => {
    return <>Loading...</>;
  };

  //Function component for showing All the Products after API is fetched
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons mb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={showAllProducts}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={showMensProducts}
          >
            {category[2]}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={showWomensProducts}
          >
            {category[3]}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={showJeweleryProducts}
          >
            {category[1]}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={showElectronicsProducts}
          >
            {category[0]}
          </button>
        </div>

        {data.map((products) => {
          return (
            <>
              <div className="col-md-3 d-inline-block mb-3" style={{"width":"18rem"}}>
              <div className="card h-100 text-center px-4 py-3 mx-3">
                  {/* {Navigation link to ProductDetail Component} */}
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
                    <p className="card-text lead fw-bold">
                      Rs.{products.price}/-
                    </p>
                    {/* {Navigation link to ProductDetail Component} */}
                    <NavLink to={`/productdetail/${products.id}`}>
                      <button className="btn btn-dark">Buy Now</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  //Fetching API to get Product categories
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

  //Function component for showing All the products
  const showAllProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  };

  //Function component for showing only Men's products
  const showMensProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        setData(response.data);
      });
  };

  //Function component for showing only Women's products
  const showWomensProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => {
        setData(response.data);
      });
  };
  //Function component for showing only Jewelery products
  const showJeweleryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setData(response.data);
      });
  };

  //Function component for showing only Electronics products
  const showElectronicsProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setData(response.data);
      });
  };

  //While API is fetching Loading Component will be rendering,
  //After API is fetched ShowProducts Component will be rendered
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
      {/* {Adding Footer component } */}
      <Footer />
    </div>
  );
}

export default Products;
