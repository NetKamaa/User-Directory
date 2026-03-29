import type { IUser } from "../types/user";

interface IUserDetailsProps {
  user: IUser | undefined;
}

export function UserDetails({ user }: IUserDetailsProps) {
  if (!user) {
    return <p className="text-center mt-4">User not found</p>;
  }
  return (
    <div className="my-6 p-4 border border-violet-600 rounded-xl shadow-sm max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-2 text-center">
        Name: {user.name}
      </h2>
      <div className="text-center">
        <h4>Age: {user.age}</h4>
        <p>City: {user.city}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}
