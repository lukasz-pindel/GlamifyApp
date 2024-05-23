import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Business } from "../../model/Business"
import { Service } from "../../model/Service"
import { useAuth } from "../../context/AuthContext"

interface BookingModalProps {
  show: boolean
  handleClose: () => void
  business: Business | null
  service: Service | null
  handleBooking: (appointmentTime: string) => void
}

export const BookingModal: React.FC<BookingModalProps> = ({
  show,
  handleClose,
  business,
  service,
  handleBooking,
}) => {
  const [appointmentTime, setAppointmentTime] = useState("")
  const { user } = useAuth()

  const onBook = () => {
    if (business && service) {
      handleBooking(appointmentTime)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book a Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBarberName">
            <Form.Label>Business</Form.Label>
            <Form.Control type="text" readOnly value={business ? business.name : ""} />
          </Form.Group>
          <Form.Group controlId="formServiceName">
            <Form.Label>Service</Form.Label>
            <Form.Control type="text" readOnly value={service ? service.name : ""} />
          </Form.Group>
          <Form.Group controlId="formAppointmentTime">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              disabled={!user}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onBook} className="book-btn" disabled={!user}>
          Book
        </Button>
        {!user && (
          <span style={{ color: "red", marginLeft: "10px" }}>
            You cannot book a service without being logged in.
          </span>
        )}
      </Modal.Footer>
    </Modal>
  )
}
