import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row, ListGroup, Spinner } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AddBusinessModal from "../components/home/business/AddBusinessModal";
import BusinessService from "../services/BusinessService";
import { Business } from "../model/Business";

export const BusinessPage: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [currentBusiness, setCurrentBusiness] = useState<Business | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const businessService = new BusinessService("https://localhost:44360/api");
  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const data = await businessService.getBusinesses(); 
      setBusinesses(data);
    } catch (error) {
      console.error('Failed to fetch businesses', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {

    fetchBusinesses();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    fetchBusinesses();
  };

  const handleAddNewListing = () => {
    setCurrentBusiness(undefined);
    setShowModal(true);
  };

  const handleEditBusiness = (business: Business) => {
    setCurrentBusiness(business);
    setShowModal(true);
  };

  const handleDeleteBusiness = async (businessId: number) => {
    await businessService.deleteBusiness(businessId);
    fetchBusinesses();
  };

  return (
    loading ? 
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> :
    <Container style={{ minHeight: "800px" }}>
      <Row className="justify-content-between align-items-center mb-5 pt-4">
        <Col xs={6} md={2} className="text-md-right">
          <Button variant="outline" onClick={() => navigate("/")} className="book-btn">
            <FiArrowLeft /> Back to Home
          </Button>
        </Col>
        <Col xs={12} md={12} className="text-center">
          <h1 className="my-4">Your Businesses</h1>
        </Col>
      </Row>
      <Button variant="success" onClick={handleAddNewListing} className="mb-3 book-btn">
        Add your business
      </Button>
      <ListGroup>
        {businesses.map((business) => (
          <ListGroup.Item
          key={business.id}
          className="d-flex justify-content-between align-items-center"
          >
          <div>
            <strong>{business.name}</strong> - {business.address}
          </div>
          <span>
            <Button
              className="explore-btn me-3"
              onClick={() => handleEditBusiness(business)}
              >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteBusiness(business.id)}
              className="explore-btn"
              >
              Delete
            </Button>
          </span>
        </ListGroup.Item>
        ))}
        </ListGroup>
      <AddBusinessModal show={showModal} onHide={handleClose} business={currentBusiness}/>
    </Container>
  );
};
