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
      <div className="flex flex-col mt-2">
        <div
          className={`${isSelected ? "border-black" : "border-gray-300"} border-2 rounded-xl w-32 shadow-sm hover:shadow-md transition  cursor-pointer p-3 mb-2 text-center`}
          onClick={() => onSelect(user.id)}
        >
          <h3 className="font-medium">{user.name}</h3>
        </div>
        <button
          className="border border-red-600 hover:border-red-700 cursor-pointer mt-2 rounded-2xl text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(user.id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
}
