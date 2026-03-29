import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import { SearchBar } from "./components/SearchBar";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";
import { mockUsers } from "./data/users";
import type { IUser, TActiveView, TRoleFilter } from "./types/user";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const [inputsValue, setInputValue] = useState<string>("");

  const [users, setUsers] = useState<IUser[]>(mockUsers);

  const [selectsValue, setSelectValue] = useState<TRoleFilter>("all");

  const [activeView, setActiveView] = useState<TActiveView>("all-users");

  function getActiveView(user: IUser) {
    if (activeView === "all-users") return true;
    if (activeView === "admins") return user.role === "admin";
    if (activeView === "young") return user.age <= 23;
  }

  function deleteUser(userId: string) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

    if (selectedUserId === userId) {
      setSelectedUserId(null);
    }
  }

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const filteredUser = users.filter((user) => {
    const matchesQuery = user.name
      .toLowerCase()
      .includes(inputsValue.toLowerCase());
    const matchesRole = selectsValue === "all" || user.role === selectsValue;
    const matchesView = getActiveView(user);
    return matchesQuery && matchesRole && matchesView;
  });

  return (
    <>
      <div className="m-4">
        <UserList
          users={filteredUser}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          deleteUser={deleteUser}
        />

        <SearchBar
          setInputValue={setInputValue}
          inputsValue={inputsValue}
          setSelectValue={setSelectValue}
          selectsValue={selectsValue}
          setActiveView={setActiveView}
        />

        <AddUserForm setUsers={setUsers} />

        <UserDetails user={selectedUser} />
      </div>
    </>
  );
}

export default App;
