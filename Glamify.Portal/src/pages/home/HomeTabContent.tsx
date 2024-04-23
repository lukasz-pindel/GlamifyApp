import * as React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

interface HomeTabContentProps {
  onNavigate: () => void
}
export const HomeTabContent: React.FC<HomeTabContentProps> = (props) => {
  const { onNavigate } = props

  return (
    <Container style={{ minHeight: "800px" }}>
      <Row className="justify-content-center my-4">
        <Col md={8}>
          <h1>Welcome to Glamify!</h1>
          <p className="mt-3">
            Easily schedule and manage appointments at any time, from anywhere. Whether it's for
            haircuts, spa treatments, or medical consultations, our user-friendly platform makes
            booking your next appointment hassle-free.
          </p>
          <p className="mt-2">
            Start by browsing our services or if you're already a member, book your next appointment
            right away!
          </p>
          <Button variant="primary" size="lg" className="mt-3 book-btn" onClick={onNavigate}>
            Explore Categories
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
