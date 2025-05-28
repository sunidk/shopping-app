import { useEffect, useState } from "react"; //importing React, useEffect and useState Hooks
import axios from "axios"; //importing axios
import { useParams } from "react-router-dom"; //importing useparams
import { NavLink } from "react-router-dom"; //importing NavLink
import Footer from "./Footer"; //importing Footer component

function ProductDetail() {
  const { id } = useParams(); //using id
  const [product, setProduct] = useState([]); //setting initial state of product as empty array
  const [loading, setLoading] = useState(false); //setting initial state of loading as false
  const [count, setCount] = useState(0); //setting initial state of count as zero

  //Fetching API to get Particular product
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Function for incrementing count in cart when Add to cart button is clicked
  const addToCart = () => {
    setCount(count + 1);
    let myCart = document.getElementById("cart");
    myCart.innerText = `Cart(${count + 1})`;
    myCart.style.color = "red";
    alert("Successfully added to cart");
  };

  //Function component for showing Loading message while API is fetching
  const Loading = () => {
    return <>Loading...</>;
  };

  //Function component for showing Product Details after API is fetched
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p>
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-3">Rs. {product.price} /-</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-dark py-2" onClick={addToCart}>
            Add to Cart
          </button>
          {/* {Navigation link to Cart Component} */}
          <NavLink to={"/cart"}>
            <button className="btn btn-outline-dark ms-2 py-2">
              Go to Cart
            </button>
          </NavLink>
        </div>
      </>
    );
  };

  //While API is fetching Loading Component will be rendering,
  //After API is fetched ShowProduct Component will be rendered
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      {/* {Adding Footer component} */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
