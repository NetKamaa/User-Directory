import type { User } from "../types/user";

type UserDetailsProps = {
  user: User | undefined;
};

export function UserDetails({ user }: UserDetailsProps) {
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
