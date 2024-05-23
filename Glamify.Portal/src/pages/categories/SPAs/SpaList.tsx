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

export const SpaList: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Business[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedSpa, setSelectedSpa] = useState<Business | null>(null)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const { user } = useAuth()

  const navigate = useNavigate()
  const businessService = new BusinessService("https://localhost:44360/api")
  const servicesService = new ServicesService("https://localhost:44360/api")
  const appointmentService = new AppointmentService("https://localhost:44360/api")

  const fetchBusinesses = async () => {
    setLoading(true)
    try {
      const data = await businessService.getBusinessesOfType(BusinessType.SPA)
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
    if (!user || !selectedSpa || !selectedService) {
      console.error("User, spa, or service data is missing")
      return
    }

    const newAppointment: CreateAppointmentRequest = {
      userId: user.id,
      user: user,
      locationId: selectedSpa.id,
      location: selectedSpa,
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

  const openBookingModal = (spa: Business, service: Service) => {
    setSelectedSpa(spa)
    setSelectedService(service)
    setShowModal(true)
  }

  const closeBookingModal = () => {
    setSelectedSpa(null)
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
            <h1>Featured Spas</h1>
          </Col>
        </Row>
        <hr style={{ width: "100%" }} />
        {data.map((spa) => (
          <Row key={spa.id} className="mb-3">
            <Col md={3}>
              <Card.Body className="business-card">
                <Card.Title>
                  <h3>{spa.name}</h3>
                </Card.Title>
                <Card.Text>{spa.address}</Card.Text>
              </Card.Body>
            </Col>
            <Col md={9} className="text-md-right">
              {services
                .filter((x) => x.businessId === spa.id)
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
                          onClick={() => openBookingModal(spa, service)}
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
        business={selectedSpa}
        service={selectedService}
        handleBooking={handleBooking}
      />
    </>
  )
}
