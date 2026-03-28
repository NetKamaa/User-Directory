import type { TRole } from "../types/user";

interface ISearchBar {
  setInputValue: (value: string) => void;
  inputsValue: string;
  setSelectValue: (value: TRole | "all") => void;
  selectsValue: string;
}

export function SearchBar({
  setInputValue,
  inputsValue,
  setSelectValue,
  selectsValue,
}: ISearchBar) {
  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-2 border-violet-600 text-center"
          type="text"
          value={inputsValue}
          placeholder="search by name"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div className="flex justify-center mt-2">
        <select
          className="border-2 border-violet-600 text-center"
          value={selectsValue}
          onChange={(e) => setSelectValue(e.target.value as TRole | "all")}
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
