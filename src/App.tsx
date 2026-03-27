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
  const selectedUser = users.find((user) => user.id === selectedUserId);
  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(inputsValue.toLowerCase()),
  );
  return (
    <>
      <div className="m-4">
        <UserList
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          setInputValue={setInputValue}
          inputsValue={inputsValue}
        />
        <UserDetails user={selectedUser} />
        {filteredUser.map((user) => (
          <UserDetails key={user.id} user={user}></UserDetails>
        ))}
        <AddUserForm setUsers={setUsers} />
      </div>
    </>
  );
}

export default App;
