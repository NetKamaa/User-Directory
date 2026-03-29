import { useState } from "react";
import type { IUser, TRole, TStatus } from "../types/user";

type TAddUserFormProps = {
  onAddUser: (user: IUser) => void;
};

function AddUserForm({ onAddUser }: TAddUserFormProps) {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userRole, setUserRole] = useState<TRole>("user");

  const [status, setStatus] = useState<TStatus>("idle");

  function getCorrectStatus(status: TStatus) {
    if (status === "loading") return "Saving...";
    if (status === "success") return "User added successfully";
    if (status === "error") return "Fill all fields correctly";
  }

  function addUser(e: React.SubmitEvent) {
    e.preventDefault();
    setStatus("loading");

    const trimmedName = userName.trim();
    const trimmedCity = userCity.trim();
    const parsedAge = Number(userAge);

    if (!trimmedName || !trimmedCity || Number.isNaN(parsedAge)) {
      setStatus("error");
      return;
    }

    const user: IUser = {
      id: crypto.randomUUID(),
      name: trimmedName,
      age: parsedAge,
      city: trimmedCity,
      role: userRole,
    };
    onAddUser(user);
    setStatus("success");

    setUserName("");
    setUserAge("");
    setUserCity("");
    setUserRole("user");
  }

  return (
    <>
      <form
        onSubmit={(e) => addUser(e)}
        className="flex flex-col gap-3 mt-6 max-w-md mx-auto"
      >
        <input
          className="border border-gray-700 rounded-lg px-4 py-2 w-full"
          type="text"
          value={userName}
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          className="border border-gray-700 rounded-lg px-4 py-2 w-full"
          type="text"
          value={userAge}
          placeholder="age"
          onChange={(e) => setUserAge(e.target.value)}
        ></input>
        <input
          className="border border-gray-700 rounded-lg px-4 py-2 w-full"
          type="text"
          value={userCity}
          placeholder="city"
          onChange={(e) => setUserCity(e.target.value)}
        ></input>
        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value as TRole)}
          className="border border-gray-700 rounded-lg px-4 py-2 w-full"
        >
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="moderator">moderator</option>
        </select>
        <button
          className="bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
          type="submit"
        >
          Add
        </button>
      </form>
      <p className="flex justify-center mt-1.5">{getCorrectStatus(status)}</p>
    </>
  );
}
export default AddUserForm;
