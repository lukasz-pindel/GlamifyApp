import { AppointmentStatus } from "../Appointment"
import { Business } from "../Business"
import { Employee } from "../Employee"
import { Service } from "../Service"
import { User } from "../User"

export interface CreateAppointmentRequest {
  userId: number
  user: User
  locationId: number
  location: Business
  appointmentTime: Date
  status: AppointmentStatus
  services: Service[]
  employeeId?: number
  employee?: Employee
}
