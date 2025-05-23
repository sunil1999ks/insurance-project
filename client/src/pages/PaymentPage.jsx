import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dummyPlan = {
    company: "FutureGen Insurance",
    type: "Comprehensive Car Insurance",
    premium: "₹ 2,666",
    policyStart: "2025-05-22",
    benefits: [
      "Zero Depreciation Cover",
      "Roadside Assistance",
      "Cashless Garages",
      "Engine Protection",
    ],
  };

  const { selectedPlan } = location.state || { selectedPlan: dummyPlan };

  const handleDummyPayment = () => {
    setTimeout(() => {
      const fakePaymentId = "FAKEPAY" + Math.floor(Math.random() * 1000000);
      navigate("/payment-success", {
        state: {
          paymentId: fakePaymentId,
          plan: selectedPlan,
        },
      });
    }, 1000);
  };

  return (
    <Container className="mt-5 text-center">
      <h3 className="mb-4">Confirm & Pay for Your Plan</h3>

      <Card className="mb-4 shadow-lg mx-auto" style={{ maxWidth: "400px" }}>
        <Card.Header as="h5" className="bg-danger text-white">
          {selectedPlan.company}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Type:</strong> {selectedPlan.type}
          </Card.Text>
          <Card.Text>
            <strong>Policy Start:</strong> {selectedPlan.policyStart}
          </Card.Text>
          <Card.Text>
            <strong>Premium:</strong>{" "}
            <span className="text-danger">{selectedPlan.premium}</span>
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="danger" size="lg" onClick={handleDummyPayment} className="w-100">
            Pay Now
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PaymentPage;
