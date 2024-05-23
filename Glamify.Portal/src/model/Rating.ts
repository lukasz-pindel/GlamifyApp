import { Business } from "./Business"
import { User } from "./User"

export interface Rating {
  businessId: number
  business: Business
  userId: number
  user: User
  value: number
  creationDate: Date
  comment?: Comment
}
