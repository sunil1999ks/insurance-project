import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';

const CreateInsurance = () => {

  const token = localStorage.getItem("token")




    const insuranceNames = {
    Health: [
      'HDFC ERGO Health Insurance',
      'Niva Bupa Health Insurance',
      'Care Health Insurance',
      'Aditya Birla Health Insurance',
      'Star Health Insurance',
      'ICICI Lombard Health Insurance',
      'Reliance Health Insurance',
      'ManipalCigna Health Insurance',
      'Digit Health Insurance',
      'Cholamandalam MS Health Insurance'
    ],
    Car: [
      'ICICI Lombard Car Insurance',
      'HDFC Ergo Car Insurance',
      'Reliance Car Insurance',
      'Digit Car Insurance',
      'United Car Insurance',
      'New India Car Insurance',
      'Royal Sundaram Car Insurance',
      'Kotak Car Insurance',
      'Future Generali Car Insurance',
      'Iffco Tokio Car Insurance'
    ],
    Bike: [
      'ICICI Lombard Bike Insurance',
      'HDFC Ergo Bike Insurance',
      'Reliance Bike Insurance',
      'Digit Bike Insurance',
      'United Bike Insurance',
      'New India Bike Insurance',
      'Royal Sundaram Bike Insurance',
      'Kotak Bike Insurance',
      'Future Generali Bike Insurance',
      'Iffco Tokio Bike Insurance'
    ],
    Life: [
      'Axis Max Life Insurance',
      'HDFC Life Insurance',
      'Tata AIA Life Insurance',
      'PNB MetLife Insurance',
      'ICICI Prudential Insurance',
      'Kotak Life Insurance',
      'Bajaj Allianz Insurance'
    ]
  };

  const [availableNames, setAvailableNames] = useState([]);




  const [formValues, setFormValues] = useState({
    name: '',
    coverageType: '',
    startDate: '',
    endDate: '',
    premiumAmount: ''
  });



    // Update availableNames when coverageType changes
  useEffect(() => {
    if (formValues.coverageType) {
      setAvailableNames(insuranceNames[formValues.coverageType]);
    } else {
      setAvailableNames([]);
    }
    setFormValues(prev => ({ ...prev, name: '' }));
  }, [formValues.coverageType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:5000/api/policies/createPolicy",
      formValues,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    toast.success(res.data.message)
  } catch (err) {
    console.log(err);
    toast.error("Error While creating insurance policy")
  }
};


  return (

    <>
       <ToastContainer position="bottom-right" autoClose={5000} />



     <Card className="p-5 shadow-sm border-0 rounded-4">
      <div className="d-flex align-items-center mb-4">
        <FiPlusCircle size={26} className="me-2 text-danger" />
        <h4 className="mb-0">Add New Insurance</h4>
      </div>

  


       <Form onSubmit={handleSubmit}>
    
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Coverage Type</Form.Label>
        <Form.Select
          name="coverageType"
          value={formValues.coverageType}
          onChange={handleChange}
          className="rounded-3 py-3 px-4 border-light shadow-sm"
          required
        >
          <option value="">Choose Coverage Type</option>
          <option value="Health">Health</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Life">Life</option>
        </Form.Select>
      </Form.Group>

     
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Insurance Name</Form.Label>
        <Form.Select
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="rounded-3 py-3 px-4 border-light shadow-sm"
          required
          disabled={!formValues.coverageType}
        >
          <option value="">Choose Insurance Name</option>
          {availableNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
        </Form.Select>
      </Form.Group>

     
      <div className="row">
        <div className="col-md-6 mb-4">
          <Form.Label className="fw-semibold">Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            className="rounded-3 py-3 px-4 border-light shadow-sm"
            required
          />
        </div>
        <div className="col-md-6 mb-4">
          <Form.Label className="fw-semibold">End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formValues.endDate}
            onChange={handleChange}
            className="rounded-3 py-3 px-4 border-light shadow-sm"
            required
          />
        </div>
      </div>

    
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Premium Amount (₹)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter premium amount"
          name="premiumAmount"
          value={formValues.premiumAmount}
          onChange={handleChange}
          className="rounded-3 py-3 px-4 border-light shadow-sm"
          required
        />
      </Form.Group>

   
      <Button type="submit" variant="danger" className="rounded-3 px-5 py-3 fw-semibold">
        Submit
      </Button>
    </Form>


    </Card>
    
    </>
   
  );
};

export default CreateInsurance;
