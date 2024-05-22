import { Business } from "../model/Business";
import { BusinessType } from "../model/enums/BusinessType";
import BaseApiService from "./BaseApiService";

class BusinessService extends BaseApiService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  getBusinesses(): Promise<Business[]> {
    return this.get<Business[]>("/business");
  }

  getBusinessesOfType(type: BusinessType): Promise<Business[]> {
    return this.get<Business[]>(`/business?type=${type}`);
  }

  deleteBusiness(businessId: number): Promise<void> {
    return this.delete<void>(`/business/${businessId}`);
  }
}

export default BusinessService;
