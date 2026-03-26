import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: number | null;
  setSelectedUserId: (id: number) => void;
}

export function UserList({
  users,
  selectedUserId,
  setSelectedUserId,
}: IUserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={user.id === selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
      ))}
    </div>
  );
}
