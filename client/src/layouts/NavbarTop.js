import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logo from "./../images/id-main-logo.svg";


const NavbarTop = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    let role;

    if (token) {
        const payloadBase64 = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        const userRole = decodedPayload.role;

        role = userRole;
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-dark b px-3  border-bottom" >

            <span className="navbar-brand">
                <img src={logo} alt="Logo" width="180" height="50" />
            </span>

            <div className="ms-auto d-flex align-items-center gap-3">


                <form className="d-none d-md-flex">
                    <input
                        className="form-control rounded-pill border-0 shadow-sm"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        style={{ width: '200px' }}
                    />
                </form>

                <Dropdown align="end">
                    <Dropdown.Toggle
                        variant="light"
                        className="d-flex align-items-center gap-2 px-3 rounded-pill shadow-sm border-0"
                    >

                        <span className="fw-medium text-capitalize">{role}</span>
                    </Dropdown.Toggle>



                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/dashboard/settings")}>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    );
};

export default NavbarTop;
