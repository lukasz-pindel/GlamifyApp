import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { UpdateAppointmentRequest } from "../model/requests/UpdateAppointmentRequest"
import RescheduleModal from "../components/main/RescheduleModal"
import { useAuth } from "../context/AuthContext"
import { Appointment, AppointmentStatus } from "../model/Appointment"
import AppointmentService from "../services/AppointmentService"

const ProfilePage: React.FC = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [showRescheduleModal, setShowRescheduleModal] = useState<boolean>(false)
  const [appointmentToReschedule, setAppointmentToReschedule] = useState<Appointment | null>(null)
  const appointmentService = new AppointmentService("https://localhost:44360/api")

  const fetchAppointments = async () => {
    if (user) {
      try {
        const fetchedAppointments = await appointmentService.getAppointments()
        setAppointments(fetchedAppointments.filter((appointment) => appointment.userId === user.id))
      } catch (error) {
        console.error("Failed to fetch appointments:", error)
      }
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [user])

  const handleCancel = async (appointmentId: number) => {
    const updatedAppointment: UpdateAppointmentRequest = {
      id: appointmentId,
      appointmentTime: new Date(),
      status: AppointmentStatus.Cancelled,
    }

    try {
      await appointmentService.updateAppointment(appointmentId, updatedAppointment)
      setShowRescheduleModal(false)
      setAppointmentToReschedule(null)
      await fetchAppointments()
    } catch (error) {
      console.error("Failed to cancel appointment:", error)
    }
  }

  const handleReschedule = (appointment: Appointment) => {
    setAppointmentToReschedule(appointment)
    setShowRescheduleModal(true)
  }

  const handleRescheduleSubmit = async (newAppointmentTime: string) => {
    if (!appointmentToReschedule) return

    const updatedAppointment: UpdateAppointmentRequest = {
      id: appointmentToReschedule.id,
      appointmentTime: new Date(newAppointmentTime),
      status: AppointmentStatus.Scheduled,
    }

    try {
      await appointmentService.updateAppointment(appointmentToReschedule.id, updatedAppointment)
      setShowRescheduleModal(false)
      setAppointmentToReschedule(null)
      await fetchAppointments()
    } catch (error) {
      console.error("Failed to reschedule appointment:", error)
    }
  }

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Profile Information</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {user.username}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Your Appointments</Card.Title>
              {appointments.length === 0 ? (
                <Card.Text>No appointments found.</Card.Text>
              ) : (
                <ul className="list-unstyled">
                  {appointments.map((appointment) => (
                    <li key={appointment.id}>
                      <Card className="mb-3">
                        <Card.Body>
                          <Card.Title>{appointment.location.name}</Card.Title>
                          <Card.Text>
                            <strong>Time:</strong>{" "}
                            {new Date(appointment.appointmentTime).toLocaleString()}
                          </Card.Text>
                          <Card.Text>
                            <strong>Services:</strong>{" "}
                            {appointment.services.map((service) => service.name).join(", ")}
                          </Card.Text>
                          <Card.Text>
                            <strong>Status:</strong>{" "}
                            <span
                              style={{
                                color:
                                  appointment.status === AppointmentStatus.Cancelled
                                    ? "red"
                                    : "inherit",
                              }}
                            >
                              {AppointmentStatus[appointment.status]}
                            </span>
                          </Card.Text>
                          {appointment.status !== AppointmentStatus.Cancelled && (
                            <>
                              <Button
                                variant="danger"
                                onClick={() => handleCancel(appointment.id)}
                                style={{ marginRight: "10px" }}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() => handleReschedule(appointment)}
                              >
                                Reschedule
                              </Button>
                            </>
                          )}
                        </Card.Body>
                      </Card>
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <RescheduleModal
        show={showRescheduleModal}
        handleClose={() => setShowRescheduleModal(false)}
        handleReschedule={handleRescheduleSubmit}
      />
    </Container>
  )
}

export default ProfilePage
