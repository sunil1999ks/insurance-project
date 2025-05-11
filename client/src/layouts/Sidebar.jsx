

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaHome,
    FaPlusCircle,
    FaList,
    FaFileAlt,
    FaCog,
} from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();
    const token = localStorage.getItem("token");

    let role;

    if (token) {
        const payloadBase64 = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        role = decodedPayload.role;
    }

    const navItems = [
        { path: '/dashboard', label: 'Home', icon: <FaHome /> },
        { path: '/dashboard/create-insurance', label: 'Create Insurance', icon: <FaPlusCircle /> },
        { path: '/dashboard/list-insurance', label: 'List Insurance', icon: <FaList /> },
        { path: '/dashboard/claim-requests', label: 'Claim Requests', icon: <FaFileAlt /> },
        { 
            path: '/dashboard/payments', 
            label: 'Payments', 
            icon: <FaFileAlt />, 
            // roles: ['admin'] // Only visible to admin
        },
        { path: '/dashboard/settings', label: 'Settings', icon: <FaCog /> },
    ];

    const filteredNavItems = navItems.filter(item => {
        // Show item if no roles defined, or if user's role is included in item's roles
        return !item.roles || item.roles.includes(role);
    });

    return (
        <div
            className="d-flex flex-column bg-danger shadow-sm vh-100 p-4 border-end"
            style={{ width: '260px' }}
        >
            <ul className="nav flex-column">
                {filteredNavItems.map((item, index) => (
                    <li className="nav-item mb-3" key={index}>
                        <Link
                            className={`nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ease-in-out ${
                                location.pathname === item.path
                                    ? 'bg-black text-white border-start border-3 border-black'
                                    : 'text-dark hover-bg-light rounded-3 hover-shadow'
                            }`}
                            to={item.path}
                        >
                            <span>{item.icon}</span>
                            <span className="fw-medium">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
