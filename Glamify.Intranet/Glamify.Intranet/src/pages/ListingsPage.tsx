import React from "react";
import { Container, ListGroup, Button, Col, Row } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ListingsPage: React.FC = () => {
  const navigate = useNavigate();
  const listings = [
    { id: 1, name: "Downtown Barber Shop", location: "123 Main St" },
    { id: 2, name: "Sunny Spa Center", location: "456 Sunny Rd" },
    { id: 3, name: "Elegant Nails", location: "789 Beauty Blvd" },
  ];

  const handleAddNewListing = () => {
    console.log("bla bla ");
  };

  const handleDeleteListing = (id: number) => {
    console.log("bla bla bla bla", id);
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
          <h1 className="my-4">Your Listings</h1>
        </Col>
      </Row>
      <Button
        variant="success"
        onClick={handleAddNewListing}
        className="mb-3 book-btn"
      >
        Add New Listing
      </Button>
      <ListGroup>
        {listings.map((listing) => (
          <ListGroup.Item
            key={listing.id}
            className="d-flex justify-content-between align-items-center"
          >
            {listing.name} - {listing.location}
            <span>
              <Button className="explore-btn me-3">Edit</Button>
              <Button
                onClick={() => handleDeleteListing(listing.id)}
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
