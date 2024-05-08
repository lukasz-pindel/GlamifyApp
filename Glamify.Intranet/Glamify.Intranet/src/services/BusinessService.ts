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

  deleteBusiness(businessId: number): Promise<void> {
    return this.delete<void>(`/business/${businessId}`);
  }
}

export default BusinessService;
