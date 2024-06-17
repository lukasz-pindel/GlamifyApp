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
  const [errors, setErrors] = useState({ appointmentTime: "", general: "" })
  const { user } = useAuth()

  const onBook = () => {
    let valid = true
    let newErrors = { appointmentTime: "", general: "" }

    if (!user) {
      newErrors.general = "You cannot book a service without being logged in."
      valid = false
    }

    if (!appointmentTime) {
      newErrors.appointmentTime = "Appointment time is required."
      valid = false
    }

    if (valid && business && service) {
      handleBooking(appointmentTime)
      handleClose()
    } else {
      setErrors(newErrors)
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
            {errors.appointmentTime && <div style={{ color: "red" }}>{errors.appointmentTime}</div>}
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
        {errors.general && (
          <span style={{ color: "red", marginLeft: "10px" }}>
            {errors.general}
          </span>
        )}
      </Modal.Footer>
    </Modal>
  )
}