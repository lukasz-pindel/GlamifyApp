import { BusinessType } from "../enums/BusinessType";

export interface CreateBusinessRequest {
  name: string;
  address: string;
  phone: string;
  email: string;
  businessType: BusinessType;
  ownerUserId: number;
}
