import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { placesInCategories } from '../../../mockData/places';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const BarbersList: React.FC = () => {
    const barbers = placesInCategories.barbers;
    const navigate = useNavigate();

    const handleBackToExplore = () => {
        navigate('/?tab=explore'); 
    };

    const handleBooking = (id: number) => {
        console.log(id);
    };

    return (
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
            {barbers.map(barber => (
                <Row key={barber.id} className="mb-3">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={barber.logo} alt={barber.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card.Body>
                            <Card.Title>{barber.name}</Card.Title>
                            <Card.Text>{barber.address}</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4} className="text-md-right">
                        <Button variant="primary" onClick={() => handleBooking(barber.id)} className="book-btn">Book</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
