import React, { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AddBusinessModal from "../components/home/business/AddBusinessModal";

export const BusinessPage: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleAddNewListing = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
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
          <h1 className="my-4">Your Businesses</h1>
        </Col>
      </Row>
      <Button
        variant="success"
        onClick={handleAddNewListing}
        className="mb-3 book-btn"
      >
        Add your business
      </Button>
      <AddBusinessModal show={showModal} onHide={handleClose} />
    </Container>
  );
};
