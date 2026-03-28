import type { IUser } from "../types/user";
import { UserCard } from "./UserCard";

interface IUserListProps {
  users: IUser[];
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
  setInputValue: (value: string) => void;
  inputsValue: string;
  setSelectValue: (value: string) => void;
  selectsValue: string;
}

export function UserList({
  users,
  selectedUserId,
  setSelectedUserId,
  setInputValue,
  inputsValue,
  setSelectValue,
  selectsValue,
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
      <div className="flex justify-center">
        <input
          className="border-2 border-violet-600 text-center"
          type="text"
          value={inputsValue}
          placeholder="search by name"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div>
        <select
          value={selectsValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="all">all</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="moderator">moderator</option>
        </select>
      </div>
    </>
  );
}
