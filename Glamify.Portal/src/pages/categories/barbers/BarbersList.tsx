import React, { useEffect, useState } from "react"
import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import { Business } from "../../../model/Business"
import BusinessService from "../../../services/BusinessService"
import { BusinessType } from "../../../model/enums/BusinessType"

export const BarbersList: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Business[]>([]);
  const navigate = useNavigate();
  const businessService = new BusinessService("https://localhost:44360/api");

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const data = await businessService.getBusinessesOfType(BusinessType.Barbershop); 
      setData(data);
    } catch (error) {
      console.error('Failed to fetch businesses', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const handleBackToExplore = () => {
    navigate("/?tab=explore");
  }

  const handleBooking = (id: number) => {
    console.log(id);
  }

  return (
    isLoading ? (<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>) : 
    <Container className="mb-5 mt-5">
      <Row className="justify-content-between align-items-center mb-5 pt-4">
        <Col xs={6} md={2} className="text-md-right">
          <Button variant="outline" onClick={handleBackToExplore} className="book-btn">
            <FiArrowLeft /> Back to Explore
          </Button>
        </Col>
        <Col xs={12} md={12} className="text-center">
          <h1>Featured Barbers</h1>
        </Col>
      </Row>
      {data.map((barber) => (
        <Row key={barber.id} className="mb-3">
          <Col md={4}>
            <Card.Body>
              <Card.Title>{barber.name}</Card.Title>
              <Card.Text>{barber.address}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={4} className="text-md-right">
            <Button variant="primary" onClick={() => handleBooking(barber.id)} className="book-btn">
              Book
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
