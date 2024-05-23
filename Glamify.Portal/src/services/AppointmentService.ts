import { Appointment } from "../model/Appointment"
import { CreateAppointmentRequest } from "../model/requests/CreateAppointmentRequest"
import { UpdateAppointmentRequest } from "../model/requests/UpdateAppointmentRequest"
import BaseApiService from "./BaseApiService"

class AppointmentService extends BaseApiService {
  constructor(baseURL: string) {
    super(baseURL)
  }

  getAppointments(): Promise<Appointment[]> {
    return this.get<Appointment[]>("/Appointment")
  }

  createAppointment(appointment: CreateAppointmentRequest): Promise<Appointment> {
    return this.post<Appointment>("/Appointment", appointment)
  }

  deleteAppointment(appointmentId: number): Promise<void> {
    return this.delete<void>(`/Appointment/${appointmentId}`)
  }

  updateAppointment(
    appointmentId: number,
    updatedAppointment: UpdateAppointmentRequest
  ): Promise<Appointment> {
    return this.put<Appointment>(`/Appointment/${appointmentId}`, updatedAppointment)
  }

  cancelAppointment(appointmentId: number): Promise<Appointment> {
    return this.put<Appointment>(`/Appointment/${appointmentId}/cancel`, {})
  }
}

export default AppointmentService
