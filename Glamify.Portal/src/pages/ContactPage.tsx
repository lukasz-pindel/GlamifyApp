import * as React from "react";
import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export const ContactUsPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Thank you for contacting us!");
      // Clear form after submission
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";
    return errors;
  };

  return (
    <Container style={{ padding: "20px", minHeight: "800px", marginTop: "200px" }}>
      <h1>Contact Us</h1>
      <Form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-1"
              isInvalid={!!errors.name}
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-1"
              isInvalid={!!errors.email}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalMessage">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-1"
              isInvalid={!!errors.message}
            />
            {errors.message && <div style={{ color: "red" }}>{errors.message}</div>}
          </Col>
        </Form.Group>
        <Button
          type="submit"
          variant="outline-dark"
          style={{ width: "150px", margin: "0 auto", display: "block" }}
        >
          Send Message
        </Button>
      </Form>
    </Container>
  );
};
