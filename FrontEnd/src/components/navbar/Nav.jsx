import logo from "../../assets/Our_logo_new.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3 container">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#Visa">
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
            <button className="btn btn-login px-4 py-2 btn-outline-success">
              Admin_Login
            </button>

            {/*<button className="btn btn-register px-4 py-2">Sign Up →</button>*/}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
