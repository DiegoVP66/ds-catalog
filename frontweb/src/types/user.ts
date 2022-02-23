import { Role } from './vendor/role';
export type User = {
  id: number;
  email: string;
};

export type UserRegister = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: number;
  role?: Role[];
};
