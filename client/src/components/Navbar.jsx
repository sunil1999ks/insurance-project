

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from 'bootstrap';
import logo from "./../images/id-main-logo.svg";

const Navbar = () => {

 
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [userValues, setUserValues] = useState({
    email: "",
    name: "",
    password: "",
    role: "user"
  });

  const [loginValues, setLoginValues] = useState({
    inp_email: "",
    inp_password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", loginValues);
      console.log(res.data);
     
      
      navigate("dashboard");

      // Close modal after login
      const modalElement = document.getElementById('exampleModal');
      const modalInstance = Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }

      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }


       const paredData = JSON.stringify(res.data.user)
     
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", paredData);

    } catch (err) {
      console.log(err);
      toast.error("Invalid email or password");
    }
  };


  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/users/register", userValues)
      .then(res => {
        console.log(res.data);
        toast.success("Registration successful");

        // Close modal after registration
        const modalElement = document.getElementById('exampleModal');
        const modalInstance = Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }

      }).catch(err => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const handleChangeForRegister = (e) => {
    const { name, value } = e.target;
    setUserValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeForLogin = (e) => {
    const { name, value } = e.target;
    setLoginValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <nav className="navbar bg-white shadow-sm border-bottom sticky-top py-2">
        <div className="w-100 d-flex justify-content-between align-items-center px-4 px-md-5">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center me-4" href="#">
            <img src={logo} alt="Logo" width="180" height="50" />
          </a>


          <ul className="nav gap-4 d-none d-lg-flex align-items-center">
            <div
              className="dropdown hover-dropdown"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >


              <button
                className="btn  font-weight-bold dropdown-toggle p-2 pe-4 modern-dropdown-toggle"
                aria-expanded={isOpen}
              >
                Insurance Menu
              </button>




              <ul className={`dropdown-menu ${isOpen ? 'show' : ''} gap-2`}>

                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item dropdown-toggle" href="/health-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://static.insurancedekho.com/pwa/img/v2_icon_health.svg"
                      alt="Health Insurance"

                    />
                    Health Insurance
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="/health-insurance/companies"
                      >
                        Health Insurance Companies
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/health-insurance/hdfc-ergo">HDFC ERGO</a></li>
                        <li><a className="dropdown-item" href="/health-insurance/niva-bupa-health-insurance">Niva Bupa</a></li>
                        <li><a className="dropdown-item" href="/health-insurance/care-health-insurance">Care Health</a></li>
                        <li><a className="dropdown-item" href="/health-insurance/aditya-birla">Aditya Birla</a></li>
                        <li><a className="dropdown-item" href="/health-insurance/star">Star Health</a></li>

                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="/health-insurance/plans">Best Health Plans</a></li>
                    <li><a className="dropdown-item" href="/health-insurance/claim-settlement">Claim Settlement</a></li>
                    <li><a className="dropdown-item" href="/health-insurance/abha">Health ABHA ID</a></li>
                  </ul>
                </li>


                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://static.insurancedekho.com/pwa/img/v2_icon_car.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Car Insurance
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/car-insurance/companies/icici-lombard">ICICI Lombard</a></li>
                    <li><a className="dropdown-item" href="/car-insurance/pay-as-you-drive">Pay As You Drive</a></li>
                    <li><a className="dropdown-item" href="/car-insurance/quotes-page">Quotes</a></li>
                  </ul>
                </li>



                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://static.insurancedekho.com/pwa/img/v2_icon_bike.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Bike Insurance
                  </a>

                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://www.insurancedekho.com/pwa/img/v2_icon_health.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Life Insurance
                  </a>

                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://static.insurancedekho.com/pwa/img/v2_icon_life.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Team Insurance
                  </a>

                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://www.insurancedekho.com/pwa/img/v2_icon_investment.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Investment
                  </a>

                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="/car-insurance">
                    <img
                      width="24"
                      height="24"
                      src="https://www.insurancedekho.com/pwa/img/business_insurance.svg"
                      alt="Car Insurance"
                      className="me-2"
                    />
                    Business Insurance
                  </a>

                </li>
              </ul>





            </div>


            <div
              className="dropdown hover-dropdown"
              onMouseEnter={() => setIsOpen2(true)}
              onMouseLeave={() => setIsOpen2(false)}
            >


              <button
                className="btn  font-weight-bold dropdown-toggle p-2 pe-4 modern-dropdown-toggle"
                aria-expanded={isOpen2}
              >
                Insurance Advisors
              </button>

              <ul className={`dropdown-menu ${isOpen2 ? 'show' : ''}`}>

                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/new-delhi">
                    Insurance Advisors in New Delhi
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/gurgaon">
                    Insurance Advisors in Gurgaon
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/faridabad">
                    Insurance Advisors in Faridabad
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/ghaziabad">
                    Insurance Advisors in Ghaziabad
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/noida">
                    Insurance Advisors in Noida
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/kolkata">
                    Insurance Advisors in Kolkata
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/hyderabad">
                    Insurance Advisors in Hyderabad
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/lucknow">
                    Insurance Advisors in Lucknow
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/mumbai">
                    Insurance Advisors in Mumbai
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/insurance-advisors/pune">
                    Insurance Advisors in Pune
                  </a>
                </li>


              </ul>

            </div>





            <li><a className="dropdown-item font-weight-bold" href="/health-insurance/star">Renew</a></li>


            <div
              className="dropdown hover-dropdown"
              onMouseEnter={() => setIsOpen3(true)}
              onMouseLeave={() => setIsOpen3(false)}
            >


              <button
                className="btn  font-weight-bold dropdown-toggle p-2 pe-4 modern-dropdown-toggle"
                aria-expanded={isOpen3}
              >
                Support
              </button>

              <ul className={`dropdown-menu ${isOpen3 ? 'show' : ''}`}>

                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/dashboard">
                    <span className="subMicon">
                      <img
                        loading="lazy"
                        width="24"
                        height="24"
                        alt="Track Policy Page"
                        src="https://static.insurancedekho.com/pwa/img/v2_icon_policyTrack.svg"
                      />
                    </span>
                    Track Policy
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="/dashboard">
                    <span className="subMicon">
                      <img
                        loading="lazy"
                        width="24"
                        height="24"
                        alt="Download Policy Page"
                        src="https://static.insurancedekho.com/pwa/img/v2_icon_policyDownload.svg"
                      />
                    </span>
                    Download Policy
                  </a>
                </li>
                <li className="dropdown-submenu d-flex align-items-center gap-2">
                  <a className="dropdown-item" href="tel:7551196989">
                    <span className="subMicon">
                      <img
                        loading="lazy"
                        width="24"
                        height="24"
                        alt="Call Us 7551196989"
                        src="https://static.insurancedekho.com/pwa/img/v2_call-green.svg"
                      />
                    </span>
                    <span className="navSmall">Call Us</span> 7551196989
                  </a>
                </li>


              </ul>

            </div>



            <li><a className="dropdown-item font-weight-bold" href="/health-insurance/star">Become POSP Agent</a></li>



          </ul>

          {/* Search & Login */}
          <div className="d-flex align-items-center gap-2">
            <input
              className="form-control rounded-pill px-3 border-light shadow-sm d-none d-md-block"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '180px' }}
            />
            <button className="btn btn-danger rounded-pill px-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-semibold" id="authModalLabel">
                {isLogin ? 'Welcome Back 👋' : 'Create an Account ✨'}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body pt-0">
              {isLogin ? (
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="you@example.com"
                      name="inp_email"
                      value={loginValues.inp_email}
                      onChange={handleChangeForLogin}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="••••••••"
                      name="inp_password"
                      value={loginValues.inp_password}
                      onChange={handleChangeForLogin}
                      required
                    />
                  </div>
                  <div className="w-100 d-flex justify-content-between">
                    <button type="submit" className="btn btn-danger px-4">Login</button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="John Doe"
                      name="name"
                      value={userValues.name}
                      onChange={handleChangeForRegister}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="you@example.com"
                      name="email"
                      value={userValues.email}
                      onChange={handleChangeForRegister}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Create password"
                      name="password"
                      value={userValues.password}
                      onChange={handleChangeForRegister}
                      required
                    />
                  </div>
                  <div className="w-100 d-flex justify-content-between">
                    <button type="submit" className="btn btn-danger px-4">Register</button>
                  </div>
                </form>
              )}
            </div>

            <div className="modal-footer border-0 pt-0 d-flex flex-column">
              <small className="mt-3">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button className="btn btn-link p-0 ms-1" type="button" onClick={toggleForm}>
                  {isLogin ? 'Register' : 'Login'}
                </button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
