import { useState } from "react";
import type { IUser, TRole } from "../types/user";

interface ISetUsers {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

function AddUserForm({ setUsers }: ISetUsers) {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("user");

  function addUser(e: React.SubmitEvent) {
    e.preventDefault();
    const user: IUser = {
      id: crypto.randomUUID(),
      name: userName,
      age: Number(userAge),
      city: userCity,
      role: userRole as TRole,
    };
    setUsers((prev) => [...prev, user]);
  }

  return (
    <form onSubmit={(e) => addUser(e)} className="flex">
      <input
        className="border-2"
        type="text"
        value={userName}
        placeholder="name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        className="border-2"
        type="text"
        value={userAge}
        placeholder="age"
        onChange={(e) => setUserAge(e.target.value)}
      ></input>
      <input
        className="border-2"
        type="text"
        value={userCity}
        placeholder="city"
        onChange={(e) => setUserCity(e.target.value)}
      ></input>
      <select
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
        className="border-2"
      >
        <option value="admin">admin</option>
        <option value="user">user</option>
        <option value="moderator">moderator</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
export default AddUserForm;
