import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Modal, Button, Form } from 'react-bootstrap';

import { FiEdit, FiTrash2, FiFileText } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { TbCancel } from "react-icons/tb";
import { FcApproval } from "react-icons/fc";

const PaymentList = () => {
  const token = localStorage.getItem("token")
  const [data, setData] = useState([])


  let role;

  if (token) {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const userRole = decodedPayload.role;

    role = userRole;
  }







  const getClaimRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/payments/listPayments", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
      })
      console.log(res.data);
      setData(res.data)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getClaimRequests();
  }, [])


  // Table columns
  const columns = [
    {
      name: 'SL No.',
      selector: (row, index) => index + 1,
      width: '100px',
      sortable: true,
    },
    {
      name: 'Policy Id',
      selector: row => row._id,
      sortable: true,
      width: '250px',
    },
    {
      name: 'Name',
      selector: row => row.policy.name,
      sortable: true,
      width: '250px',
    },
    {
      name: 'Coverage Type',
      selector: row => row.policy.coverageType,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => new Date(row.policy.startDate).toLocaleDateString(),
    },
    {
      name: 'End Date',
      selector: row => new Date(row.policy.endDate).toLocaleDateString(),

    },
    {
      name: 'Premium Amount',
      selector: row => `₹ ${row.policy.premiumAmount}`,
    },
    {
      name: 'Amount',
      selector: row => `₹ ${row.amount}`,
    },
  
    {
      name: 'Created At',
      selector: row => new Date(row.createdAt).toLocaleString(),
      width: '200px',
    },
    {
      name: 'Payment Date',
      selector: row => new Date(row.paymentDate).toLocaleString(),
      width: '200px',
    },
    {
      name: 'Status',
      selector: row => row.paymentStatus,
      cell: row => (
        <div>
          {
            row.paymentStatus === "successful" && (
              <span className='text-success text-capitalize fw-bold'>{row.paymentStatus}</span>
            )
          }
          {
            row.paymentStatus === "rejected" && (
              <span className='text-danger text-capitalize fw-bold'>{row.paymentStatus}</span>
            )
          }
          {
            row.paymentStatus === "pending" && (
              <span className='text-warning text-capitalize fw-bold'>{row.paymentStatus}</span>
            )
          }
        </div>),
      width: '120px',
    },
 
  ];




  // Custom styles
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px',
        fontSize: '16px',
        color: '#333',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#0f172a',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    pagination: {
      style: {
        backgroundColor: '#f1f5f9',
        borderTop: '1px solid #e2e8f0',
        padding: '10px',
      },
    },
    table: {
      style: {
        borderRadius: '12px',
        overflow: 'hidden',
      },
    },
  };

  return (

    <>

      <ToastContainer position="bottom-right" autoClose={5000} />




      <div className="p-6 bg-gray-50 min-h-screen w-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Payments</h2>
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          striped
          customStyles={customStyles}
        />



      </div>

    </>

  );
};

export default PaymentList;
 
