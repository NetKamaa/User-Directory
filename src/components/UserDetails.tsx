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
      <h2>{user.name}</h2>
      <h4>{user.age}</h4>
      <h5>{user.role}</h5>
      <p>{user.city}</p>
    </div>
  );
}
