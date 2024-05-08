import * as React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomePageContent: React.FC = () => {
  return (
    <Container style={{ marginTop: "20px", minHeight: "800px" }}>
      <h1 className="my-4">Dashboard</h1>
      <Row className="g-4">
        <Col md={6} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Business</Card.Title>
              <Card.Text>Add new places or update existing ones.</Card.Text>
              <Link to={"/business"}>
                <Button variant="primary" className="book-btn">
                  Go to Business
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Manage the services you offer at your locations.
              </Card.Text>
              <Link to={"/services"}>
                <Button variant="primary" href="#services" className="book-btn">
                  Manage Services
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-4 mt-3">
        <Col md={6} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Listings</Card.Title>
              <Card.Text>Add new places or update existing ones.</Card.Text>
              <Link to={"/listings"}>
                <Button
                  variant="primary"
                  href="#manage-listings"
                  className="book-btn"
                >
                  Go to Listings
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
