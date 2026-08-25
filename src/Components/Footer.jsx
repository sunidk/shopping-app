import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <form className="footer-signup" onSubmit={handleSubmit}>
          <p className="footer-signup-label">Sign up for more info</p>
          <div className="footer-signup-row">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-ghost">
              {subscribed ? "Subscribed ✓" : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="footer-copy">
          © {new Date().getFullYear()} <span className="text-gradient">Cartly</span>. Demo storefront by Sunil Kotian.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
