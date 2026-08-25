import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./Profile.css";

const Footer = lazy(() => import("./Footer"));

const QUICK_LINKS = [
  { label: "My Orders", to: null },
  { label: "My Cart", to: "/cart" },
  { label: "My Wallet", to: null },
];

function Profile() {
  return (
    <div className="profile-page">
      <div className="container profile-inner">
        <div className="profile-card">
          <div className="profile-avatar">S</div>
          <h2 className="profile-name">Sunil</h2>
          <NavLink to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </NavLink>

          <div className="profile-links">
            {QUICK_LINKS.map((link) =>
              link.to ? (
                <NavLink to={link.to} key={link.label} className="profile-link-btn">
                  {link.label}
                </NavLink>
              ) : (
                <button className="profile-link-btn" key={link.label} type="button">
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Profile;
