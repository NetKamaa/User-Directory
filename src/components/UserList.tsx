import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export function UserList({
  users,
  selectedUserId,
  onSelect,
  onDelete,
}: IUserListProps) {
  return (
    <div className="flex justify-center gap-5">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={user.id === selectedUserId}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
