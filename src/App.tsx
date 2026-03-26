import { useState } from "react";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";
import { users } from "./data/users";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const selectedUser = users.find((user) => user.id === selectedUserId);
  return (
    <>
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <UserDetails user={selectedUser} />
    </>
  );
}

export default App;
