import { useState } from "react";
import type { IUser, TRoleFilter } from "../types/user";

interface ISetUsers {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

function AddUserForm({ setUsers }: ISetUsers) {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userRole, setUserRole] = useState<TRoleFilter>("user");

  function addUser(e: React.SubmitEvent) {
    e.preventDefault();

    const trimmedName = userName.trim();
    const trimmedCity = userCity.trim();
    const parsedAge = Number(userAge);

    if (!trimmedName || !trimmedCity || Number.isNaN(parsedAge)) {
      return;
    }

    const user: IUser = {
      id: crypto.randomUUID(),
      name: trimmedName,
      age: parsedAge,
      city: trimmedCity,
      role: userRole as TRoleFilter,
    };
    setUsers((prev) => [...prev, user]);

    setUserName("");
    setUserAge("");
    setUserCity("");
    setUserRole("user");
  }

  return (
    <form
      onSubmit={(e) => addUser(e)}
      className="flex mt-4 gap-2 justify-center"
    >
      <input
        className="border-2 border-violet-600"
        type="text"
        value={userName}
        placeholder="name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        className="border-2 border-violet-600"
        type="text"
        value={userAge}
        placeholder="age"
        onChange={(e) => setUserAge(e.target.value)}
      ></input>
      <input
        className="border-2 border-violet-600"
        type="text"
        value={userCity}
        placeholder="city"
        onChange={(e) => setUserCity(e.target.value)}
      ></input>
      <select
        value={userRole}
        onChange={(e) => setUserRole(e.target.value as TRoleFilter)}
        className="border-2 border-violet-600"
      >
        <option value="admin">admin</option>
        <option value="user">user</option>
        <option value="moderator">moderator</option>
      </select>
      <button className="bg-violet-600 px-4 py-2 rounded-2xl" type="submit">
        Add
      </button>
    </form>
  );
}
export default AddUserForm;
