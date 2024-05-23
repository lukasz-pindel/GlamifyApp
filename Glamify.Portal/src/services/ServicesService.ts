import { Service } from "../model/Service"
import BaseApiService from "./BaseApiService"

class ServicesService extends BaseApiService {
  constructor(baseURL: string) {
    super(baseURL)
  }

  getServices(): Promise<Service[]> {
    return this.get<Service[]>("/Service")
  }

  getServicesForUser(userId: number): Promise<Service[]> {
    return this.get<Service[]>(`/Service?userId=${userId}`)
  }

  createService(service: Service): Promise<Service> {
    return this.post<Service>("/Service", service)
  }

  updateService(serviceId: number, service: Service): Promise<Service> {
    return this.post<Service>(`/Service/${serviceId}`, service)
  }

  deleteService(serviceId: number): Promise<void> {
    return this.delete<void>(`/Service/${serviceId}`)
  }
}

export default ServicesService
