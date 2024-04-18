import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { placesInCategories } from '../../../mockData/places';

export const NailSalonsList: React.FC = () => {
    const nailSalons = placesInCategories.nailSalons;
    return (
        <Container className="mb-5 mt-5">
            <h1 className="my-4">Featured Barbers</h1>
            {nailSalons.map(nailSalon => (
                <Row key={nailSalon.id} className="mb-3">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={nailSalon.logo} alt={nailSalon.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card.Body>
                            <Card.Title>{nailSalon.name}</Card.Title>
                            <Card.Text>{nailSalon.address}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}