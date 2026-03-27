import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
  setInputValue: (value: string) => void;
  inputsValue: string;
}

export function UserList({
  users,
  selectedUserId,
  setSelectedUserId,
  setInputValue,
  inputsValue,
}: IUserListProps) {
  return (
    <>
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
      <div>
        <input
          className="flex justify-center"
          type="text"
          value={inputsValue}
          placeholder="input"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
    </>
  );
}
