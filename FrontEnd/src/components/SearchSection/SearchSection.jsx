function SearchSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3">
              Find Your Dream Destination
            </h1>

            <p className="lead text-secondary mb-5">
              Search countries to explore visa requirements, immigration
              information and travel guidance.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="🔍 Search Country (e.g. Canada)"
                    />
                  </div>

                  <div className="col-md-3 d-grid">
                    <button className="btn btn-warning btn-lg rounded-pill fw-bold">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
