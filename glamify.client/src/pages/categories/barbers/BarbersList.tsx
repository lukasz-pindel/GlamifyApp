import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { placesInCategories } from '../../../mockData/places';

export const BarbersList: React.FC = () => {
    const barbers = placesInCategories.barbers;
    return (
        <Container className="mb-5 mt-5">
            <h1 className="my-4">Featured Barbers</h1>
            {barbers.map(barber => (
                <Row key={barber.id} className="mb-3">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={barber.logo} alt={barber.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card.Body>
                            <Card.Title>{barber.name}</Card.Title>
                            <Card.Text>{barber.address}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
