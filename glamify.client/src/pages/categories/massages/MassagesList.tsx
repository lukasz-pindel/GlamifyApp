import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { placesInCategories } from "../../../mockData/places"
import { FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

export const MassagesList: React.FC = () => {
  const massages = placesInCategories.massagePlaces
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
          <h1>Featured Massage places</h1>
        </Col>
      </Row>
      {massages.map((massage) => (
        <Row key={massage.id} className="mb-3">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={massage.logo}
                alt={massage.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card.Body>
              <Card.Title>{massage.name}</Card.Title>
              <Card.Text>{massage.address}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={4} className="text-md-right">
            <Button
              variant="primary"
              onClick={() => handleBooking(massage.id)}
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
