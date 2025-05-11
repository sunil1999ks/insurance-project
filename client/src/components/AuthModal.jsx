import React, { useState } from 'react';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#authModal"
      >
        Open Auth Modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="authModal"
        tabIndex="-1"
        aria-labelledby="authModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">

            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-semibold" id="authModalLabel">
                {isLogin ? 'Welcome Back 👋' : 'Create an Account ✨'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body pt-0">
              {isLogin ? (
                <form>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="small text-danger">Forgot password?</a>
                  </div>
                </form>
              ) : (
                <form>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Create password"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-medium">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      placeholder="Repeat password"
                    />
                  </div>
                </form>
              )}
            </div>

            <div className="modal-footer border-0 pt-0 d-flex flex-column">
              <div className="w-100 d-flex justify-content-between">
                <button type="button" className="btn btn-light border" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-danger px-4">
                  {isLogin ? 'Login' : 'Register'}
                </button>
              </div>
              <small className="mt-3">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  className="btn btn-link p-0 ms-1"
                  type="button"
                  onClick={toggleForm}
                >
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

export default AuthModal;
