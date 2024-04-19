import * as React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

export const AboutUsPage: React.FC = () => {
  return (
    <Container style={{ marginTop: "20px", minHeight: "800px" }}>
      <h1>About Us</h1>
      <Row className="mb-5 mt-5">
        <h2>Our Mission</h2>
        <p>
          At Glamify, our mission is to streamline the process of scheduling appointments for both
          businesses and consumers. We aim to make booking services as simple and efficient as
          possible, reducing wait times and increasing satisfaction.
        </p>
      </Row>
      <Row className="mb-5">
        <h2>Meet Our Team</h2>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-team-member-image.jpg" />
            <Card.Body>
              <Card.Title>Lukasz Pindel</Card.Title>
              <Card.Text>
                Lukasz is the CEO of Glamify. He has over 5 years of experience in the tech industry
                and is passionate about improving service accessibility.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-team-member-image.jpg" />
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Text>
                John is the CTO of Glamify. His expertise in software development drives our
                technology strategies forward.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-team-member-image.jpg" />
            <Card.Body>
              <Card.Title>Sarah Connor</Card.Title>
              <Card.Text>
                Sarah is our Head of Customer Service. She ensures that all our users' needs are met
                with efficiency and care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
