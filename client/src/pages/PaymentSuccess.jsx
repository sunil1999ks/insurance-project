// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { Button, Card, Container } from "react-bootstrap";

// const PaymentSuccess = () => {
//   const location = useLocation();
//   const { paymentId, plan } = location.state || {};

//   return (
//     <Container className="mt-5 text-center">
//       <Card className="shadow-lg">
//         <Card.Header as="h4" className="bg-success text-white">
//           Payment Successful!
//         </Card.Header>
//         <Card.Body>
//           <h5 className="mb-3">Thank you for your payment 🎉</h5>
//           <p>
//             <strong>Payment ID:</strong> {paymentId}
//           </p>
//           <p>
//             <strong>Insured Plan:</strong> {plan?.company} (
//             {plan?.type})
//           </p>
//           <p>
//             <strong>Amount Paid:</strong> {plan?.premium}
//           </p>
//           <Button variant="primary" as={Link} to="/">
//             Back to Home
//           </Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default PaymentSuccess;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col, Badge } from "react-bootstrap";
import { FaCheckCircle, FaCar, FaMoneyCheckAlt, FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/Navbar";

const PaymentSuccess = () => {
  const { state } = useLocation();
  const { paymentId, plan } = state || {};
  const navigate = useNavigate();

  return (
  <>

  <Navbar/>
  
    <Container className="my-5 d-flex justify-content-center">
      <Card
        style={{ maxWidth: "600px", width: "100%" }}
        className="shadow-lg rounded-4 p-4"
      >
        <div className="text-center mb-4">
          <FaCheckCircle size={50} className="text-success mb-3" />
          <h2 className="fw-bold text-success">Payment Successful!</h2>
          <p className="text-muted fs-5">
            Your transaction has been completed successfully.
          </p>
        </div>

        <Card.Body>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <h6 className="text-secondary mb-1">Payment ID</h6>
              <p className="fw-semibold fs-5">{paymentId || "N/A"}</p>
            </Col>

            <Col xs={12} md={6} className="text-md-end">
              <Badge bg="success" className="fs-6 px-3 py-2">
                <FaMoneyCheckAlt className="me-2" />
                Paid
              </Badge>
            </Col>
          </Row>

          {plan ? (
            <>
              <hr />
              <h4 className="mb-3 text-danger fw-bold">
                <FaCar className="me-2" />
                Purchased Plan Details
              </h4>

              <Row className="mb-2">
                <Col xs={6}>
                  <strong>Company:</strong>
                </Col>
                <Col xs={6} className="text-end">
                  {plan.company}
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs={6}>
                  <strong>Plan Type:</strong>
                </Col>
                <Col xs={6} className="text-end">
                  {plan.type}
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs={6}>
                  <strong>Premium:</strong>
                </Col>
                <Col xs={6} className="text-end text-danger fw-bold">
                  {plan.premium}
                </Col>
              </Row>

              <Row className="mb-2">
                <Col xs={6}>
                  <strong>IDV:</strong>
                </Col>
                <Col xs={6} className="text-end">
                  {plan.idv}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={6}>
                  <strong>Claim Settled:</strong>
                </Col>
                <Col xs={6} className="text-end">
                  {plan.claimSettled}
                </Col>
              </Row>

              <h6 className="mb-2 text-secondary">Benefits:</h6>
              <ul className="list-unstyled ms-3 text-secondary">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="mb-1">
                    ✔ {benefit}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-muted">No plan details available.</p>
          )}

          <div className="d-grid mt-4">
            <Button
              variant="danger"
              size="lg"
              onClick={() => navigate("/")}
              className="rounded-pill"
            >
              <FaArrowLeft className="me-2" />
              Back to Home
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </>
  );
};

export default PaymentSuccess;
