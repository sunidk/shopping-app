function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section>
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for more info</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example29"
                      className="form-control"
                    />
                    <label className="form-label">Email address</label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="text-center p-3 bg-secondary">
          © 2022 Copyright :
          <a
            className="text-white ms-2"
            target="_blank"
            href="https://www.myntra.com/"
            rel="noreferrer"
          >
            Myntra.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
