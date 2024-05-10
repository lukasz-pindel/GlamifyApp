import { Appointment } from "./Appointment";
import { Business } from "./Business";

export interface Employee {
    id: number;
    name: string;
    position?: string;
    contactInfo?: string;
    businessId: number;
    business: Business;
    appointments: Appointment[];
  }