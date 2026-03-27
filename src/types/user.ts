export type TRole = "admin" | "user" | "moderator";

export interface IUser {
  id: string;
  name: string;
  age: number;
  city: string;
  role: TRole;
}
