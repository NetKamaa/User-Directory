export type TRole = "admin" | "user" | "moderator";
export type TRoleFilter = TRole | "all";

export type TActiveView = "all-users" | "admins" | "young";

export type TStatus = "idle" | "loading" | "success" | "error";

export interface IUser {
  id: string;
  name: string;
  age: number;
  city: string;
  role: TRole;
}
