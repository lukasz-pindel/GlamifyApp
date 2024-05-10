export interface User {
  username: string;
  password: string;  
  email: string;
  userType: number;
  appointments: any[];  
  ratings: any[];       
  ownedBusinesses: any[]; 
  id: number;
}
