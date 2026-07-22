function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-warning">VisaMaster</h3>

            <p className="text-light-emphasis mt-3">
              VisaMaster is your trusted B2B visa processing partner, helping
              travel agencies, consultants, and businesses provide reliable visa
              services worldwide.
            </p>

            <div className="d-flex gap-3 fs-4 mt-4">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  About Us
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Services
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  News
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Our Services</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Tourist Visa</li>
              <li className="mb-2">Business Visa</li>
              <li className="mb-2">Student Visa</li>
              <li className="mb-2">Work Visa</li>
              <li>Travel Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p>
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              Mumbai, Maharashtra, India
            </p>

            <p>
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              info@visamaster.com
            </p>

            <p>
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +91 98765 43210
            </p>

            <p>
              <i className="bi bi-clock-fill text-warning me-2"></i>
              Mon - Sat : 9:00 AM - 7:00 PM
            </p>
          </div>
          {/* Location Map */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Our Location</h5>

            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1784700850592!6m8!1m7!1sQ_0EY-gIneDukMITehvo8Q!2m2!1d18.93548664734287!2d72.83711714968656!3f148.0603004897354!4f5.85270219875251!5f0.7820865974627469"
                title="VisaMaster Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light-emphasis">
              © {new Date().getFullYear()} VisaMaster. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a
              href="#"
              className="text-decoration-none text-light-emphasis me-3"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-decoration-none text-light-emphasis me-3"
            >
              Terms & Conditions
            </a>

            <a href="#" className="text-decoration-none text-light-emphasis">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
