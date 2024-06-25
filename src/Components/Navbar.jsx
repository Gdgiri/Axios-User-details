import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/crud-4874261-4052973.png?f=webp"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top bg-white"
            />
          </a>

          <a class="navbar-brand" href="">
            <h4 className="text-white">CRUD-App</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
            <a href="" className="text-white">
              |||
            </a>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-white " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="/details">
                  User_Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white " to="/create">
                  Create
                </Link>
              </li>
            </ul>
            <button className="btn btn-danger">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
