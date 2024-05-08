import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BusinessType } from "../../../model/enums/BusinessType";
import BusinessService from "../../../services/BusinessService";
import { useAuth } from "../../../context/AuthContext";

interface AddBusinessModalProps {
  show: boolean;
  onHide: () => void;
}

const AddBusinessModal: React.FC<AddBusinessModalProps> = ({
  show,
  onHide,
}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState<BusinessType>(
    BusinessType.Barbershop,
  );
  const { user } = useAuth();

  const businessService = new BusinessService("https://localhost:44360");

  const handleCreateBusiness = async () => {
    if (!user?.id) {
      return;
    }

    try {
      const result = await businessService.createBusiness({
        name,
        address,
        phone,
        email,
        businessType,
        ownerUserId: user?.id,
      });
      console.log("Business created:", result);
      onHide();
    } catch (error) {
      console.error("Error creating business:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Business</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBusinessName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter business name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBusinessAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBusinessPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBusinessEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBusinessType">
            <Form.Label>Business Type</Form.Label>
            <Form.Control
              as="select"
              value={businessType}
              onChange={(e) =>
                setBusinessType(e.target.value as unknown as BusinessType)
              }
            >
              {Object.keys(BusinessType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateBusiness}>
          Create Business
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBusinessModal;
