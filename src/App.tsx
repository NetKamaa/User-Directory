import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";
import { mockUsers } from "./data/users";
import type { IUser } from "./types/user";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const [inputsValue, setInputValue] = useState<string>("");

  const [users, setUsers] = useState<IUser[]>(mockUsers);

  const [selectsValue, setSelectValue] = useState<string>("all");

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(inputsValue.toLowerCase()),
  );

  const selectedRole = users.find((user) => user.role === selectsValue);

  return (
    <>
      <div className="m-4">
        <UserList
          users={filteredUser}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          setInputValue={setInputValue}
          inputsValue={inputsValue}
          setSelectValue={setSelectValue}
          selectsValue={selectsValue}
        />

        <AddUserForm setUsers={setUsers} />

        <UserDetails user={selectedUser} />
      </div>
    </>
  );
}

export default App;
