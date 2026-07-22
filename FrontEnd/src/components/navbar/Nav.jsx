import logo from "../../assets/Our_logo_new.png";
import "./Navbar.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3 ">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="VisaMaster Logo"
            width="55"
            height="55"
            className="me-2"
          />

          <span className="logo-text">
            Visa<span>Master</span>
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#CountryCard">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Visa
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <button className="btn btn-login px-4 py-2">Login</button>

            <button className="btn btn-register px-4 py-2">Sign Up →</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
