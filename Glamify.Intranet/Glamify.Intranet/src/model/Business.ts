import { Appointment } from "./Appointment";
import { Employee } from "./Employee";
import { Rating } from "./Rating";
import { Service } from "./Service";
import { User } from "./User";
import { BusinessType } from "./enums/BusinessType";

export interface Business {
    id: number; 
    name: string;
    address: string;
    phone: string;
    email: string;
    businessType: BusinessType;
    userId?: number;
    owner?: User;
    servicesOffered: Service[];
    appointments: Appointment[];
    ratings: Rating[];
    employees: Employee[];
  }