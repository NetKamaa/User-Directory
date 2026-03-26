type Role = "admin" | "user" | "moderator";

export type User = {
  id: number;
  name: string;
  age: number;
  city: string;
  role: Role;
};
