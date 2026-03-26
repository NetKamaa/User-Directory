import type { User } from "../types/user";
import { UserCard } from "./UserCard";

type UserListProps = {
  users: User[];
  selectedUserId: number | null;
  onSelect: (id: number) => void;
};

export function UserList({ users, selectedUserId, onSelect }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={user.id === selectedUserId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
