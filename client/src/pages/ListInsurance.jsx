import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Modal, Button, Form } from 'react-bootstrap';

import { FiEdit, FiTrash2, FiFileText } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
  import { FaPaypal } from "react-icons/fa";

const ListInsurance = () => {
  const token = localStorage.getItem("token")
  const [data, setData] = useState([])
  const [requested, setRequested] = useState(false)

  let role;

  if (token) {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const userRole = decodedPayload.role;

    role = userRole;
  }



  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    policyId: '',
    claimAmount: '',
    description: ''
  });


  const handleClaim = (policyId) => {
    setFormValues({ ...formValues, policyId: policyId });
    setShowModal(true);
  };


  const handleClose = () => setShowModal(false);


  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };



  const getListInsurance = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/policies/getUserPolicies`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      console.log(res.data);
      setData(res.data)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getListInsurance();
  }, [requested])


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
      selector: row => row.name,
      sortable: true,
      width: '250px',
    },
    {
      name: 'Coverage Type',
      selector: row => row.coverageType,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => new Date(row.startDate).toLocaleDateString(),
    },
    {
      name: 'End Date',
      selector: row => new Date(row.endDate).toLocaleDateString(),

    },
    {
      name: 'Premium Amount',
      selector: row => `₹ ${row.premiumAmount}`,
    },
    {
      name: 'Created At',
      selector: row => new Date(row.createdAt).toLocaleString(),
      width: '200px',
    },
    {
      name: 'Updated At',
      selector: row => new Date(row.updatedAt).toLocaleString(),
      width: '200px',
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="d-flex gap-2">

          <button
            onClick={() => handleClaim(row._id)}
            className="btn btn-outline-success btn-sm d-flex align-items-center gap-1"
            title="Claim"
          >
            <FiFileText />
            <span>Claim</span>
          </button>

          
          <button
                onClick={() => handleSubmitPayment(row._id, row.premiumAmount)}
                className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                title="Delete"
              >
                <FaPaypal />
                <span>Make Payment</span>
              
              </button>



          {
            role === "admin" && (
              <>
              
              <button
                onClick={() => handleSubmitDelete(row._id)}
                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                title="Delete"
              >
                <FiTrash2 />
                <span>Delete</span>
              </button>



              </>



              

            )
          }
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '300px',
    }
  ];

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/claims/createClaim`, formValues, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      console.log(res.data);
      toast.success(res.data.message);

      setShowModal(false);



    } catch (err) {
      console.log(err);

      toast.error(err.response.data)
    }

  };



  const handleSubmitDelete = async (id) => {


    try {
      const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/policies/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
      })
      console.log(res.data);
      toast.success(res.data.message);
      setRequested(!requested)

    } catch (err) {
      console.log(err);

      toast.error(err.response.data)
    }

  };


   const handleSubmitPayment = async (id,premiumAmount) => {


    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payments/createPayment`,{policyId: id ,amount:premiumAmount }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
      })
      console.log(res.data);
      toast.success(res.data.message);
      setRequested(!requested)

    } catch (err) {
      console.log(err);

      toast.error(err.response.data)
    }

  };







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
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Insurance Policies</h2>
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          striped
          customStyles={customStyles}
        />


        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit Claim</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>

              <Form.Group className="mb-3">
                <Form.Label>Claim Amount (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="claimAmount"
                  value={formValues.claimAmount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Submit Claim
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>

    </>

  );
};

export default ListInsurance;
