import type { User } from "../types/user";

type UserCardProps = {
  user: User;
  isSelected: boolean;
  onSelect: (id: number) => void;
};

export function UserCard({ user, isSelected, onSelect }: UserCardProps) {
  return (
    <div
      className={`card ${isSelected ? "selected" : "card"}`}
      onClick={() => onSelect(user.id)}
    >
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <h5>{user.role}</h5>
    </div>
  );
}
