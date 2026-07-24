import "./HeroSection.css";
import heroImage from "../../assets/visa/hero_banner.png";

function HeroSection() {
  return (
    <section className="hero-section py-5 container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6">
            <span className="badge bg-warning text-dark mb-3">
              Trusted Visa Consultancy
            </span>

            <h1 className="display-4 fw-bold">
              Your Gateway to{" "}
              <span className="text-primary">Global Opportunities</span>
            </h1>

            <p className="lead text-muted my-4">
              Apply for Tourist, Student, Business, Work and Medical visas with
              expert guidance.
            </p>

            <button className="btn btn-primary btn-lg me-3">Apply Now</button>

            <button className="btn btn-outline-primary btn-lg">
              Explore Countries
            </button>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src={heroImage}
              alt="Visa Hero"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
