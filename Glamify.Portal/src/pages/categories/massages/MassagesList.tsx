import React, { useEffect, useState } from "react"
import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import { Business } from "../../../model/Business"
import BusinessService from "../../../services/BusinessService"
import { BusinessType } from "../../../model/enums/BusinessType"
import ServicesService from "../../../services/ServicesService"
import { Service } from "../../../model/Service"
import { formatPriceToPln } from "../../../common/Formatters"
import { BookingModal } from "../../../components/main/BookingModal"
import AppointmentService from "../../../services/AppointmentService"
import { AppointmentStatus } from "../../../model/Appointment"
import { useAuth } from "../../../context/AuthContext"
import { CreateAppointmentRequest } from "../../../model/requests/CreateAppointmentRequest"

export const MassagesList: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Business[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedMassage, setSelectedMassage] = useState<Business | null>(null)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const { user } = useAuth()

  const navigate = useNavigate()
  const businessService = new BusinessService("https://localhost:44360/api")
  const servicesService = new ServicesService("https://localhost:44360/api")
  const appointmentService = new AppointmentService("https://localhost:44360/api")

  const fetchBusinesses = async () => {
    setLoading(true)
    try {
      const data = await businessService.getBusinessesOfType(BusinessType.Massage)
      setData(data)
    } catch (error) {
      console.error("Failed to fetch businesses", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchServices = async () => {
    setLoading(true)
    try {
      const data = await servicesService.getServices()
      setServices(data)
    } catch (error) {
      console.error("Failed to fetch services", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBusinesses()
    fetchServices()
  }, [])

  const handleBackToExplore = () => {
    navigate("/?tab=explore")
  }

  const handleBooking = async (appointmentTime: string) => {
    if (!user || !selectedMassage || !selectedService) {
      console.error("User, massage, or service data is missing")
      return
    }

    const newAppointment: CreateAppointmentRequest = {
      userId: user.id,
      user: user,
      locationId: selectedMassage.id,
      location: selectedMassage,
      appointmentTime: new Date(appointmentTime),
      status: AppointmentStatus.Scheduled,
      services: [selectedService],
    }

    try {
      const createdAppointment = await appointmentService.createAppointment(newAppointment)
      console.log("Created Appointment:", createdAppointment)
    } catch (error) {
      console.error("Failed to create appointment:", error)
    }
  }

  const openBookingModal = (massage: Business, service: Service) => {
    setSelectedMassage(massage)
    setSelectedService(service)
    setShowModal(true)
  }

  const closeBookingModal = () => {
    setSelectedMassage(null)
    setSelectedService(null)
    setShowModal(false)
  }

  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <Container className="mb-5 mt-5" style={{ minHeight: "800px" }}>
        <Row className="justify-content-between align-items-center mb-5 pt-4">
          <Col xs={6} md={2} className="text-md-right">
            <Button variant="outline" onClick={handleBackToExplore} className="book-btn">
              <FiArrowLeft /> Back to Explore
            </Button>
          </Col>
          <Col xs={12} md={12} className="text-center">
            <h1>Featured Massages</h1>
          </Col>
        </Row>
        <hr style={{ width: "100%" }} />
        {data.map((massage) => (
          <Row key={massage.id} className="mb-3">
            <Col md={3}>
              <Card.Body className="business-card">
                <Card.Title>
                  <h3>{massage.name}</h3>
                </Card.Title>
                <Card.Text>{massage.address}</Card.Text>
              </Card.Body>
            </Col>
            <Col md={9} className="text-md-right">
              {services
                .filter((x) => x.businessId === massage.id)
                .map((service) => (
                  <>
                    <div key={service.id} className="flex-container">
                      <div className="flex-item name">
                        <h4>{service.name}</h4>
                        <text>{service.description}</text>
                      </div>
                      <div className="flex-item details">
                        <span className="price">{formatPriceToPln(service.price)}</span>
                        <Button
                          variant="primary"
                          onClick={() => openBookingModal(massage, service)}
                          className="book-btn"
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                    <hr style={{ width: "100%" }} />
                  </>
                ))}
            </Col>
          </Row>
        ))}
      </Container>
      <BookingModal
        show={showModal}
        handleClose={closeBookingModal}
        business={selectedMassage}
        service={selectedService}
        handleBooking={handleBooking}
      />
    </>
  )
}
