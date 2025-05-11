import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaUserCircle, FaEnvelope, FaUserTag, FaIdBadge } from 'react-icons/fa';

const UserCard = () => {
  const userdata = localStorage.getItem("user")
  const user = JSON.parse(userdata)

  return (
    <Card className="shadow rounded-4 border-0 p-3" style={{ maxWidth: '22rem' }}>
      <div className="text-center">
        <FaUserCircle size={80} className="text-danger mb-3" />
        <Card.Title className="fw-bold">{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
      </div>
      <Card.Body>
        <Card.Text>
          <FaIdBadge className="me-2 text-danger" />
          <strong>ID:</strong> {user.id}
        </Card.Text>
        <Card.Text>
          <FaEnvelope className="me-2 text-danger" />
          <strong>Email:</strong> {user.email}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
};

export default UserCard;
