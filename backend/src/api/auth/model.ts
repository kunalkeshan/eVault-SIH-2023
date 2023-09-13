interface User {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  status: number;
  accessToken?: string;
  refreshToken?: string;
}

export default User;
