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
            <h4 className="text-white">CRUD-APP</h4>
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
            <ul className="navbar-nav mx-auto m-3 gap-5">
              <li className="nav-item">
                <Link className="nav-link text-white " to="/">
                  <span>
                    <i class="bi bi-house-fill"></i>
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to="/details">
                  <span>
                    <i class="bi bi-person-square"></i>
                  </span>{" "}
                  User_Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white " to="/create">
                  <span>
                    <i class="bi bi-file-earmark-plus-fill"></i>
                  </span>{" "}
                  Create
                </Link>
              </li>
            </ul>
            <button className="btn btn-danger">
              <span className="m-2">
                <i class="bi bi-box-arrow-left"></i>
              </span>
               Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
