import type { IUser } from "../types/user";

interface IUserCardProps {
  user: IUser;
  isSelected: boolean;
  setSelectedUserId: (id: number) => void;
}

export function UserCard({
  user,
  isSelected,
  setSelectedUserId,
}: IUserCardProps) {
  return (
    <div
      className={`card ${isSelected ? "selected" : "card"}`}
      onClick={() => setSelectedUserId(user.id)}
    >
      <h3>{user.name}</h3>
    </div>
  );
}
