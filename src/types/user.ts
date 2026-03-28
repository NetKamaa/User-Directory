type TRole = "admin" | "user" | "moderator";
export type TRoleFilter = TRole | "all";

export type TActiveView = "all-users" | "admins" | "young";

export interface IUser {
  id: string;
  name: string;
  age: number;
  city: string;
  role: TRoleFilter;
}
