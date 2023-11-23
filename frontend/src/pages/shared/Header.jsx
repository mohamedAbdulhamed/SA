import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSignOutAlt,
  faSignIn,
  faUserLock,
  faHome,
  faInfoCircle,
  faShieldAlt,
  faCircleDot,
  faUser,
  faDashboard
} from "@fortawesome/free-solid-svg-icons";
import "../style/Navbar.scss";

const Navbar = () => {
  console.log(localStorage)
  const location = useLocation();

  const username = localStorage.getItem("username");
  const loggedIn = localStorage.getItem("loggedIn");

  const logout = () => {
    localStorage.setItem("loggedIn", "false");
    // reload
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faCircleDot} /> Grand Library
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/privacy" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/privacy">
                <FontAwesomeIcon icon={faShieldAlt} /> Privacy
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/dashboard">
                <FontAwesomeIcon icon={faDashboard} /> Dashboard
              </Link>
            </li>
          </ul>
            
          {
            loggedIn === "true" ? (
              // If logged in, show username and logout option
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="nav-link username">
                    <FontAwesomeIcon icon={faUser} /> {username}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn-logout" style={{ background: "none" }} onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </button>
                </li>
              </ul>
            ) : (
              // If not logged in, show login and sign up options
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FontAwesomeIcon icon={faSignIn} /> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <FontAwesomeIcon icon={faUserLock} /> Sign Up
                  </Link>
                </li>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
