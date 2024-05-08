import { User } from "../model/User";
import BaseApiService from "./BaseApiService";

class UserService extends BaseApiService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  register(username: string, password: string): Promise<User> {
    const user = {
      username,
      password,
    };
    return this.post<User>("/User/register", user);
  }

  login(username: string, password: string): Promise<User> {
    const loginDetails = {
      username,
      password,
    };
    return this.post<User>("/User/login", loginDetails);
  }
}

export default UserService;
