import React from "react";
import { Container, ListGroup, Button, Col, Row } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "Hair Cutting",
      description: "Includes hair cut, wash and drying.",
    },
    {
      id: 2,
      name: "Manicure",
      description: "Includes nail shaping, cuticle care, and polish.",
    },
    {
      id: 3,
      name: "Therapeutic Massage",
      description: "50-minute session focusing on back and shoulders.",
    },
  ];

  const handleAddNewService = () => {
    console.log("Add new service action triggered");
  };

  const handleEditService = (id: number) => {
    console.log("Edit service action triggered", id);
  };

  const handleDeleteService = (id: number) => {
    console.log("Delete service action triggered", id);
  };

  return (
    <Container style={{ minHeight: "800px" }}>
      <Row className="justify-content-between align-items-center mb-5 pt-4">
        <Col xs={6} md={2} className="text-md-right">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="book-btn"
          >
            <FiArrowLeft /> Back to Home
          </Button>
        </Col>
        <Col xs={12} md={12} className="text-center">
          <h1 className="my-4">Your Services</h1>
        </Col>
      </Row>
      <Button
        variant="success"
        onClick={handleAddNewService}
        className="mb-3 book-btn"
      >
        Add New Service
      </Button>
      <ListGroup>
        {services.map((service) => (
          <ListGroup.Item
            key={service.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{service.name}</strong> - {service.description}
            </div>
            <span>
              <Button
                className="explore-btn me-3"
                onClick={() => handleEditService(service.id)}
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteService(service.id)}
                className="explore-btn"
              >
                Delete
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
