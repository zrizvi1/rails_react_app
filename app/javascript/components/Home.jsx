import React from "react";
import { Link } from "react-router-dom";
// import sampleLogo from "/app/assets/images/logo.png"; 

const Home = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "80px" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={'sampleLogo'} alt="Company Logo" style={{ height: "40px" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="vh-100" style={{ backgroundColor: "#eee", minHeight: "120vh" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome</p>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Link to="/user/login" className="btn btn-primary btn-lg mx-2">Sign in as User</Link>
                        <Link to="/employer/login" className="btn btn-secondary btn-lg mx-2">Sign in as Employer</Link>
                      </div>
                      <p className="text-center mb-5">
                        Sign in as User to access your personalized dashboard and manage your account.
                      </p>
                      <div className="bg-info text-white rounded p-4">
                        <h4 className="text-center mb-4">Why Choose Us?</h4>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img 
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" 
                        alt="Sample image" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-white">About</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Contact</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f"></i> Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Company Name. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
