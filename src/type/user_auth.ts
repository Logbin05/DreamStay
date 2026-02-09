export interface User {
  id: number;
  fullName: string;
  email?: string;
  phone?: string;
  roleId: number;
  createdAt: string;
}

export interface UserAccount {
  id: number;
  userId: number;
  login: string;
  passwordHash: string;
}

export interface LoginHistory {
  id: number;
  userId: number;
  loginTime: string;
}
