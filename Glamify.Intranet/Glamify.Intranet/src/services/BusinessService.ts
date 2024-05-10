import { Business } from "../model/Business";
import { CreateBusinessRequest } from "../model/requests/CreateBusinessRequest";
import BaseApiService from "./BaseApiService";

class BusinessService extends BaseApiService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  createBusiness(
    businessData: CreateBusinessRequest,
  ): Promise<CreateBusinessRequest> {
    return this.post<CreateBusinessRequest>("/business", businessData);
  }

  updateBusiness(data: CreateBusinessRequest): Promise<Business> {
    return this.post<Business>(`/business`, data);
  }

  getBusinesses(): Promise<Business[]> {
    return this.get<Business[]>("/business");
  }

  deleteBusiness(businessId: number): Promise<void> {
    return this.delete<void>(`/business/${businessId}`);
  }
}

export default BusinessService;
