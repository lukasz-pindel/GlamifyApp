import { Business } from "./Business";
import { Employee } from "./Employee";
import { Service } from "./Service";
import { User } from "./User";

export enum AppointmentStatus {
    Scheduled = 0,
    Completed = 1,
    Cancelled = 2
  }
export interface Appointment {
    id: number;
    userId: number;
    user: User; 
    locationId: number;
    location: Business; 
    appointmentTime: Date;
    status: AppointmentStatus;
    services: Service[];
    employeeId?: number;
    employee?: Employee; 
  }