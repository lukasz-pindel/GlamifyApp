import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import { categoryData } from '../../mockData/categories';
import { useNavigate } from 'react-router-dom';

export const ExploreTabContent: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <Container style={{ minHeight: "800px"}}>
            <h1 className="my-4">Categories</h1>
            <Carousel className="custom-carousel">
                {categoryData.map(category => (
                    <Carousel.Item key={category.id}>
                        <Card className="text-center" onClick={() => handleNavigate(category.path)}>
                            <Card.Img variant="top" src={category.logo} alt={category.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Text className="mb-4">{category.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}