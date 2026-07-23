function B2bSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-primary px-3 py-2 mb-3">
              B2B Partnership
            </span>

            <h2 className="fw-bold display-6">
              Grow Your Travel Business With VisaMaster
            </h2>

            <p className="text-muted mt-3 fs-5">
              Become our trusted business partner and provide fast, reliable
              visa solutions to your customers. Whether you're a travel agency,
              consultant, or tour operator, VisaMaster helps you expand your
              services while increasing your profits.
            </p>

            <div className="row mt-4">
              <div className="col-6 mb-3">
                <div className="d-flex">
                  <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Dedicated Support</h6>
                    <small className="text-muted">
                      Personal account manager.
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="d-flex">
                  <i className="bi bi-lightning-charge-fill text-warning fs-4 me-2"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Fast Processing</h6>
                    <small className="text-muted">Quick visa handling.</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="d-flex">
                  <i className="bi bi-graph-up-arrow text-primary fs-4 me-2"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Increase Revenue</h6>
                    <small className="text-muted">
                      Earn more with every application.
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="d-flex">
                  <i className="bi bi-shield-check text-success fs-4 me-2"></i>
                  <div>
                    <h6 className="fw-bold mb-1">Trusted Service</h6>
                    <small className="text-muted">
                      Reliable documentation support.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919321325098?text=Hello%20VisaMaster,%0A%0AI%20am%20interested%20in%20becoming%20a%20B2B%20partner.%20Please%20share%20the%20partnership%20details,%20pricing,%20benefits,%20and%20registration%20process.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg me-3"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Become a Partner
            </a>

            <button className="btn btn-outline-dark btn-lg mt-3">
              Contact Sales
            </button>
          </div>

          {/* Right Side */}

          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h4 className="fw-bold text-center mb-4">
                  Why Businesses Choose Us
                </h4>

                <div className="row text-center">
                  <div className="col-6 mb-4">
                    <h2 className="fw-bold text-primary">100+</h2>
                    <p className="text-muted mb-0">Business Partners</p>
                  </div>

                  <div className="col-6 mb-4">
                    <h2 className="fw-bold text-success">25K+</h2>
                    <p className="text-muted mb-0">Visa Applications</p>
                  </div>

                  <div className="col-6">
                    <h2 className="fw-bold text-warning">99%</h2>
                    <p className="text-muted mb-0">Client Satisfaction</p>
                  </div>

                  <div className="col-6">
                    <h2 className="fw-bold text-danger">24/7</h2>
                    <p className="text-muted mb-0">Business Support</p>
                  </div>
                </div>

                <hr />

                <p className="text-center text-muted mb-0">
                  Join hundreds of successful travel businesses already growing
                  with VisaMaster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default B2bSection;
