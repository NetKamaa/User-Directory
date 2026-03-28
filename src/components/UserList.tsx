import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
}

export function UserList({
  users,
  selectedUserId,
  setSelectedUserId,
}: IUserListProps) {
  return (
    <div className="flex justify-center gap-5">
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
