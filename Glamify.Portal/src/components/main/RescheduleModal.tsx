import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

interface RescheduleModalProps {
  show: boolean
  handleClose: () => void
  handleReschedule: (newAppointmentTime: string) => void
}

const RescheduleModal: React.FC<RescheduleModalProps> = ({
  show,
  handleClose,
  handleReschedule,
}) => {
  const [newAppointmentTime, setNewAppointmentTime] = useState("")

  const onReschedule = () => {
    handleReschedule(newAppointmentTime)
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reschedule Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAppointmentTime">
            <Form.Label>New Appointment Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={newAppointmentTime}
              onChange={(e) => setNewAppointmentTime(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onReschedule}>
          Reschedule
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RescheduleModal
