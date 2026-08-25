import { NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./Home.css";
import { useReveal } from "../hooks/useReveal";

const Products = lazy(() => import("./Products"));

function Home() {
  const heroRef = useReveal();

  return (
    <div>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container hero-inner reveal" ref={heroRef}>
          <span className="eyebrow">New Season</span>
          <h1 className="hero-title">
            Arrivals built for <span className="text-gradient">every day</span>.
          </h1>
          <p className="hero-sub">
            Curated fashion, accessories, and electronics — shop the trends
            without the noise.
          </p>
          <NavLink to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </NavLink>
        </div>
      </section>

      <Suspense fallback={<div className="page-loading">Loading products...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default Home;
