import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import DashboardHome from './DashboardContent';
import CreateInsurance from '../pages/CreateInsurance';
import ListInsurance from '../pages/ListInsurance';
import ClaimRequests from '../pages/ClaimRequests';
import Sidebar from './Sidebar';

import Settings from '../pages/Settings';
import NavbarTop from './NavbarTop';
import PaymentList from '../pages/PaymentList';



const Dashboard = () => {
  return (
  

  <div className="d-flex flex-column min-vh-100">
  <NavbarTop />
  <div className="d-flex flex-grow-1 overflow-hidden">
    {/* Sidebar */}
    <div style={{ width: '250px', flexShrink: 0, overflowY: 'auto' }}>
      <Sidebar />
    </div>

    {/* Content */}
    <div className="flex-grow-1 p-4 overflow-auto">
      <Routes>
        <Route path='/' element={<DashboardHome />} />
        <Route path='/create-insurance' element={<CreateInsurance />} />
        <Route path='/list-insurance' element={<ListInsurance />} />
        <Route path='/claim-requests' element={<ClaimRequests />} />
        <Route path='/payments' element={<PaymentList />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Outlet />
    </div>
  </div>
</div>


  );
};

export default Dashboard;
