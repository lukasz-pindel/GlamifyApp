import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { placesInCategories } from "../../../mockData/places"
import { FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

export const NailSalonsList: React.FC = () => {
  const nailSalons = placesInCategories.nailSalons
  const navigate = useNavigate()

  const handleBackToExplore = () => {
    navigate("/?tab=explore")
  }

  const handleBooking = (id: number) => {
    console.log(id)
  }

  return (
    <Container className="mb-5 mt-5">
      <Row className="justify-content-between align-items-center mb-5 pt-4">
        <Col xs={6} md={2} className="text-md-right">
          <Button variant="outline" onClick={handleBackToExplore} className="book-btn">
            <FiArrowLeft /> Back to Explore
          </Button>
        </Col>
        <Col xs={12} md={12} className="text-center">
          <h1>Featured Nail Salons</h1>
        </Col>
      </Row>
      {nailSalons.map((nailSalon) => (
        <Row key={nailSalon.id} className="mb-3">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={nailSalon.logo}
                alt={nailSalon.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card.Body>
              <Card.Title>{nailSalon.name}</Card.Title>
              <Card.Text>{nailSalon.address}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={4} className="text-md-right">
            <Button
              variant="primary"
              onClick={() => handleBooking(nailSalon.id)}
              className="book-btn"
            >
              Book
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
