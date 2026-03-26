type TRole = "admin" | "user" | "moderator";

export interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
  role: TRole;
}
