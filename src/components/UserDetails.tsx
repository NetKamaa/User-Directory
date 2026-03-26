import type { IUser } from "../types/user";

interface IUserDetailsProps {
  user: IUser | undefined;
}

export function UserDetails({ user }: IUserDetailsProps) {
  if (!user) {
    return <p>User does not found</p>;
  }
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h4>Age: {user.age}</h4>
      <p>City: {user.city}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
