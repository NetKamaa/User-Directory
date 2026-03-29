import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
  deleteUser: (id: string) => void;
}

export function UserList({
  users,
  selectedUserId,
  setSelectedUserId,
  deleteUser,
}: IUserListProps) {
  return (
    <div className="flex justify-center gap-5">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={user.id === selectedUserId}
          setSelectedUserId={setSelectedUserId}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}
