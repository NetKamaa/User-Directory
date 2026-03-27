import { useState } from "react";
import { UserDetails } from "./components/UserDetails";
import { UserList } from "./components/UserList";
import { users } from "./data/users";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [inputsValue, setInputValue] = useState<string>("");
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
      </div>
    </>
  );
}

export default App;
