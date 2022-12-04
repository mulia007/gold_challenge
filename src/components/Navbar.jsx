import * as React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            <img src="img/logo.png" alt="Logo" class="d-inline-block align-text-top" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#ourService">
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#whyUs">
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#testimony">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#question">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
