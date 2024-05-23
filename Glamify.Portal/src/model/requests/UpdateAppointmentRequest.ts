import { AppointmentStatus } from "../Appointment"

export interface UpdateAppointmentRequest {
  id: number
  appointmentTime: Date
  status: AppointmentStatus
}
