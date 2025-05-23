import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Spinner,
} from "react-bootstrap";
import { FaHeartbeat, FaUser, FaCalendarAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HealthInsuranceForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    city: "",
    coverageAmount: "",
    preExistingConditions: "",
  });
  const [showPlans, setShowPlans] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate  = useNavigate();

  const cities = [
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
  ];

  const genders = ["Male", "Female", "Other"];

  const coverageAmounts = ["₹5 Lakh", "₹10 Lakh", "₹20 Lakh", "₹50 Lakh"];

  const plans = [
    {
      company: "Max Bupa",
      type: "Individual",
      policyStart: "1 June 2025",
      claimSettled: "92.5%",
      premium: "₹6,500",
      benefits: ["Cashless hospitalization", "Pre-existing diseases covered", "OPD cover"],
    },
    {
      company: "Apollo Munich",
      type: "Family Floater",
      policyStart: "1 June 2025",
      claimSettled: "94.0%",
      premium: "₹10,000",
      benefits: ["Maternity cover", "No claim bonus", "Day care procedures"],
    },
    {
      company: "Religare Health",
      type: "Individual",
      policyStart: "1 June 2025",
      claimSettled: "91.2%",
      premium: "₹7,200",
      benefits: ["Pre- and post-hospitalization", "Annual health checkup", "Ayush treatment"],
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowPlans(false);
    setTimeout(() => {
      setLoading(false);
      setShowPlans(true);
      console.log("Health Insurance Form Submitted:", formData);
    }, 1500);
  };



     const handleDummyPayment = () => {
    setTimeout(() => {
      const fakePaymentId = "FAKEPAY" + Math.floor(Math.random() * 1000000);
      navigate("/payment-success", {
        state: {
          paymentId: fakePaymentId,
         
        },
      });
    }, 1000);
  };
  return (
   <>
   <Navbar/>
    <Container className="mt-5 mb-5">
      <Card className="p-4 shadow-lg border-0 rounded-4 mb-5" style={{ background: "#fff" }}>
        <h3 className="mb-4 text-center fw-bold">
          <FaHeartbeat className="mb-1" /> Health Insurance Calculator
        </h3>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  min={0}
                  max={120}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">Gender</Form.Label>
                <Form.Select name="gender" onChange={handleChange} required>
                  <option value="">-- Select Gender --</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold">City</Form.Label>
                <Form.Select name="city" onChange={handleChange} required>
                  <option value="">-- Select City --</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Coverage Amount</Form.Label>
                <Form.Select name="coverageAmount" onChange={handleChange} required>
                  <option value="">-- Select Coverage --</option>
                  {coverageAmounts.map((amount) => (
                    <option key={amount} value={amount}>
                      {amount}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Pre-existing Conditions (if any)</Form.Label>
                <Form.Control
                  type="text"
                  name="preExistingConditions"
                  onChange={handleChange}
                  placeholder="E.g. Diabetes, Hypertension"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="danger"
            type="submit"
            className="w-100 mt-3 fs-5 py-2 rounded-pill"
            disabled={loading}
          >
            {loading ? (
              <>
                Calculating... <Spinner animation="border" size="sm" />
              </>
            ) : (
              "View Plans"
            )}
          </Button>
        </Form>
      </Card>

      {showPlans && (
        <Container>
          <h4 className="text-danger mb-4 fw-bold">❤️ Health Insurance Plans Found</h4>
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="mb-4 p-3 border-0 shadow-sm rounded-4"
              style={{ background: "#fafafa" }}
            >
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <h5 className="text-danger fw-bold">{plan.company}</h5>
                    <Badge bg="danger" className="mb-2">
                      {plan.type}
                    </Badge>
                    <p className="small text-muted mb-1">Policy Starts: {plan.policyStart}</p>
                  </Col>

                  <Col md={3}>
                    <p className="mb-2">
                      <strong>Claim Settled:</strong> {plan.claimSettled}
                    </p>
                    <p className="mb-2">
                      <strong>Premium:</strong> {plan.premium}
                    </p>
                  </Col>

                  <Col md={3}>
                    <ListGroup variant="flush">
                      {plan.benefits.map((benefit, idx) => (
                        <ListGroup.Item
                          key={idx}
                          className="p-1 ps-0 border-0 text-secondary small"
                        >
                          <FaCheckCircle className="text-success me-2" />
                          {benefit}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>

                  <Col md={2} className="text-center">
                    <Button variant="outline-danger" size="sm" className="rounded-pill mt-2" onClick={handleDummyPayment}>
                      Buy Now <FaArrowRight />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </Container>
   </>
  );
};

export default HealthInsuranceForm;
