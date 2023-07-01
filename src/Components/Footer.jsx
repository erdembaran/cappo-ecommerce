function Footer() {
  return (
    <div className="container footerContainer">
      <footer className="row row-cols-1 row-cols-md-3 row-cols-lg-5 border-top">
        <div className="col my-3 my-md-3 my-lg-0">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <span className="footer-brand">Cappo</span>
          </a>
          <p className="text-muted">© 2023 Cappo All Rights Reserved</p>
        </div>

        <div className="col my-3 my-md-3 my-lg-0">
          <h5>ABOUT US</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Store location
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Contact
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Orders tracking
              </a>
            </li>
          </ul>
        </div>

        <div className="col my-3 my-md-3 my-lg-0">
          <h5>USEFUL LINKS</h5>
          <ul className="nav flex-column">
            <li class="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Returns
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Support Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Size guide
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="col my-3 my-md-3 my-lg-0">
          <h5>FOLLLOW US</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Youtube
              </a>
            </li>
          </ul>
        </div>

        <div className="col my-3 my-md-3 my-lg-0">
          <h5>SUBSCRIBE</h5>
          <p className="text-muted">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <button className="btn btn-outline-secondary">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
