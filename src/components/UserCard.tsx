import type { IUser } from "../types/user";

interface IUserCardProps {
  user: IUser;
  isSelected: boolean;
  setSelectedUserId: (id: string) => void;
}

export function UserCard({
  user,
  isSelected,
  setSelectedUserId,
}: IUserCardProps) {
  return (
    <div
      className={`${isSelected ? "selected" : "card"} border-2 border-yellow-200 cursor-pointer p-2 mb-4`}
      onClick={() => setSelectedUserId(user.id)}
    >
      <h3>{user.name}</h3>
    </div>
  );
}
