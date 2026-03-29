import type { IUser } from "../types/user";

interface IUserDetailsProps {
  user: IUser | undefined;
}

export function UserDetails({ user }: IUserDetailsProps) {
  if (!user) {
    return <p className="text-center">User not found</p>;
  }
  return (
    <div className="flex gap-3 justify-center border border-violet-600 px-3 py-3 mt-4">
      <h2>Name: {user.name}</h2>
      <h4>Age: {user.age}</h4>
      <p>City: {user.city}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
