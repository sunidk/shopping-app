import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

const Footer = lazy(() => import("./Footer"));

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

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

  const addToCart = () => {
    setCount(count + 1);
    const myCart = document.getElementById("cart");
    if (myCart) {
      myCart.innerText = `Cart(${count + 1})`;
      myCart.style.color = "red";
    }
    alert("Successfully added to cart");
  };

  const Loading = () => {
    return <>Loading...</>;
  };

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
          <NavLink to={"/cart"}>
            <button className="btn btn-outline-dark ms-2 py-2">
              Go to Cart
            </button>
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default ProductDetail;
