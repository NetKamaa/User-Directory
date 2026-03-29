import type { IUser } from "../types/user";

interface IUserCardProps {
  user: IUser;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export function UserCard({
  user,
  isSelected,
  onSelect,
  onDelete,
}: IUserCardProps) {
  return (
    <>
      <div
        className={`${isSelected ? "selected" : "card"} border-2 border-yellow-200 cursor-pointer p-2 mb-4`}
        onClick={() => onSelect(user.id)}
      >
        <h3>{user.name}</h3>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(user.id);
        }}
      >
        delete
      </button>
    </>
  );
}
