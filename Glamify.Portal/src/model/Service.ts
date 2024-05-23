import { Appointment } from "./Appointment"
import { Business } from "./Business"

export interface Service {
  id: number
  name: string
  description: string
  price: number
  appointments: Appointment[]
  businessId: number
  business: Business
}
