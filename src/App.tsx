import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import { SearchBar } from "./components/SearchBar";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";
import { mockUsers } from "./data/users";
import type { IUser, TActiveView, TRoleFilter } from "./types/user";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const [query, setQuery] = useState<string>("");

  const [users, setUsers] = useState<IUser[]>(mockUsers);

  const [roleFilter, setRoleFilter] = useState<TRoleFilter>("all");

  const [activeView, setActiveView] = useState<TActiveView>("all-users");

  function getActiveView(user: IUser): boolean {
    if (activeView === "all-users") return true;
    if (activeView === "admins") return user.role === "admin";
    if (activeView === "young") return user.age <= 23;
    return true;
  }

  function handleAddUser(newUser: IUser): void {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function handleSelect(id: string): void {
    setSelectedUserId(id);
  }

  function handleDelete(id: string): void {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    if (selectedUserId === id) {
      setSelectedUserId(null);
    }
  }

  function handleQueryChange(value: string): void {
    setQuery(value);
  }

  function handleRoleChange(value: TRoleFilter): void {
    setRoleFilter(value);
  }

  function handleViewChange(value: TActiveView): void {
    setActiveView(value);
  }

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const filteredUsers = users.filter((user) => {
    const matchesQuery = user.name.toLowerCase().includes(query.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesView = getActiveView(user);
    return matchesQuery && matchesRole && matchesView;
  });

  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
        <UserList
          users={filteredUsers}
          selectedUserId={selectedUserId}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />

        <SearchBar
          query={query}
          roleFilter={roleFilter}
          onQueryChange={handleQueryChange}
          onRoleChange={handleRoleChange}
          onViewChange={handleViewChange}
        />

        <AddUserForm onAddUser={handleAddUser} />

        <UserDetails user={selectedUser} />
      </div>
    </>
  );
}

export default App;
