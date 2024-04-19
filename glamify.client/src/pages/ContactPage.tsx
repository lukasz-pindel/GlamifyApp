import * as React from "react"
import { Container, Form, Button, Row, Col } from "react-bootstrap"

export const ContactUsPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Thank you for contacting us!")
  }

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
            <Form.Control type="text" placeholder="Your Name" required className="mb-4" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Your Email" required className="mb-4" />
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
              required
              className="mb-4"
            />
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
  )
}
