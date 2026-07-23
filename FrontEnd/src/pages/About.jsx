import {
  FaGlobeAsia,
  FaUserTie,
  FaPassport,
  FaHeadset,
  FaCheckCircle,
  FaPlaneDeparture,
  FaBullseye,
  FaEye,
  FaHandshake,
} from "react-icons/fa";

function About() {
  const handleApplyNow = () => {
    const phone = "919167988065"; // Replace with your WhatsApp number
    const message =
      "Hello VISAMASTER, I would like to apply for a visa. Please guide me through the process.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-5 container">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold">About VISAMASTER</h1>

              <p className="lead mt-4">
                We help students, professionals, tourists, and businesses
                achieve their international travel goals through reliable visa
                consultancy and end-to-end support.
              </p>

              <button
                className="btn btn-warning rounded-pill px-4 py-2 mt-3 fw-bold"
                onClick={handleApplyNow}
              >
                Apply Now
              </button>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
                className="img-fluid rounded-4 shadow"
                alt="Travel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900"
                className="img-fluid rounded-4 shadow"
                alt="Office"
              />
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold mb-3">Our Story</h2>

              <p className="text-muted">
                VISAMASTER is committed to making international travel simple,
                transparent, and stress-free. Whether you're planning to study,
                work, travel, or expand your business abroad, our experienced
                consultants guide you through every step of the visa process.
              </p>

              <p className="text-muted">
                We believe every successful journey starts with trusted advice,
                accurate documentation, and dedicated customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Mission & Vision</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <FaBullseye className="fs-1 text-primary mx-auto mb-3" />
                <h4>Mission</h4>
                <p className="text-muted">
                  Deliver trusted visa services with complete transparency and
                  customer satisfaction.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <FaEye className="fs-1 text-success mx-auto mb-3" />
                <h4>Vision</h4>
                <p className="text-muted">
                  Become one of India's most trusted global visa consultancy
                  companies.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center p-4">
                <FaHandshake className="fs-1 text-warning mx-auto mb-3" />
                <h4>Values</h4>
                <p className="text-muted">
                  Trust, honesty, commitment, and professional customer service
                  are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose VISAMASTER?</h2>

          <div className="row g-4">
            {[
              "Professional Visa Consultants",
              "Fast Documentation Support",
              "High Visa Success Rate",
              "Affordable Service",
              "Transparent Process",
              "Dedicated Customer Support",
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow h-100 p-4">
                  <FaCheckCircle className="text-success fs-2 mb-3" />
                  <h5>{item}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Services</h2>

          <div className="row text-center g-4">
            <div className="col-md-4">
              <FaPassport className="fs-1 text-primary mb-3" />
              <h5>Tourist Visa</h5>
            </div>

            <div className="col-md-4">
              <FaGlobeAsia className="fs-1 text-primary mb-3" />
              <h5>Student Visa</h5>
            </div>

            <div className="col-md-4">
              <FaPlaneDeparture className="fs-1 text-primary mb-3" />
              <h5>Buisness Visa</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">5000+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">25+</h2>
              <p>Countries</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">98%</h2>
              <p>Success Rate</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to Begin Your Journey?</h2>

          <p className="mt-3">
            Contact our experts today and let us make your visa process simple
            and hassle-free.
          </p>

          <button
            className="btn btn-warning rounded-pill px-5 py-3 fw-bold mt-3"
            onClick={handleApplyNow}
          >
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
