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
import { FaMotorcycle, FaCity, FaCalendarAlt, FaArrowRight, FaCheckCircle, FaTools } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const BikeInsuranceForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    fuel: "",
    variant: "",
    city: "",
    purchaseDate: "",
  });
  const [showPlans, setShowPlans] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const brands = {
    "Bajaj": ["Pulsar", "Dominar", "Avenger"],
    "TVS": ["Apache", "Ntorq", "Jupiter"],
    "Hero": ["Splendor", "Passion", "Xtreme"],
    "Royal Enfield": ["Classic 350", "Himalayan", "Interceptor 650"],
  };

  const fuels = ["Petrol", "Electric"];
  const variants = ["Base", "Mid", "Top"];
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

  const plans = [
    {
      garages: 20000,
      company: "Bajaj Allianz",
      type: "Comprehensive",
      policyStart: "1 June 2025",
      claimSettled: "92.5%",
      cashlessGarages: 850,
      idv: "₹75,000",
      premium: "₹1,200",
      benefits: ["Cashless claims", "Roadside Assistance", "+1 more"],
    },
    {
      garages: 22000,
      company: "HDFC ERGO",
      type: "Third Party",
      policyStart: "1 June 2025",
      claimSettled: "90.2%",
      cashlessGarages: 900,
      idv: "₹80,000",
      premium: "₹1,100",
      benefits: ["Third-party liability", "Quick claim settlement"],
    },
    {
      garages: 18000,
      company: "ICICI Lombard",
      type: "Comprehensive",
      policyStart: "1 June 2025",
      claimSettled: "91.7%",
      cashlessGarages: 800,
      idv: "₹78,500",
      premium: "₹1,300",
      benefits: ["Zero Depreciation", "Engine Protection", "24x7 Roadside Assistance"],
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
      console.log("Bike Insurance Form Submitted:", formData);
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
          <FaMotorcycle className="mb-1" /> Bike Insurance Calculator
        </h3>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Select Your Bike Brand</Form.Label>
                <Form.Select name="brand" onChange={handleChange} required>
                  <option value="">-- Select Brand --</option>
                  {Object.keys(brands).map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Model</Form.Label>
                <Form.Select
                  name="model"
                  onChange={handleChange}
                  value={formData.model}
                  required
                >
                  <option value="">-- Select Model --</option>
                  {brands[formData.brand]?.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Fuel Type</Form.Label>
                <Form.Select name="fuel" onChange={handleChange} required>
                  <option value="">-- Select Fuel --</option>
                  {fuels.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Variant</Form.Label>
                <Form.Select name="variant" onChange={handleChange} required>
                  <option value="">-- Select Variant --</option>
                  {variants.map((variant) => (
                    <option key={variant} value={variant}>
                      {variant}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  <FaCity className="me-1" /> Registered City
                </Form.Label>
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

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  <FaCalendarAlt className="me-1" /> Purchase Date
                </Form.Label>
                <Form.Control
                  type="date"
                  name="purchaseDate"
                  onChange={handleChange}
                  required
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
          <h4 className="text-danger mb-4 fw-bold">🏍️ Bike Insurance Plans Found</h4>
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
                    <Badge bg="light" text="dark" className="me-1">
                      <FaTools /> {plan.garages}+ Garages
                    </Badge>
                  </Col>

                  <Col md={3}>
                    <p className="mb-2">
                      <strong>Claim Settled:</strong> {plan.claimSettled}
                    </p>
                    <p className="mb-2">
                      <strong>IDV:</strong> {plan.idv}
                    </p>
                    <p>
                      <strong>Garages:</strong> {plan.cashlessGarages}
                    </p>
                  </Col>

                  <Col md={2} className="text-center">
                    <h5 className="text-danger fw-bold">{plan.premium}</h5>
                    <Button variant="outline-danger" size="sm" className="rounded-pill mt-2">
                      View Details <FaArrowRight />
                    </Button>
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
                    <Button variant="danger" size="sm" className="w-100 mt-2 rounded-pill" onClick={handleDummyPayment}>
                      Buy Now
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

export default BikeInsuranceForm;
