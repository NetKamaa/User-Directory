import type { TActiveView, TRoleFilter } from "../types/user";

interface ISearchBar {
  setInputValue: (value: string) => void;
  inputsValue: string;
  setSelectValue: (value: TRoleFilter) => void;
  selectsValue: string;

  setActiveView: (value: TActiveView) => void;
}

export function SearchBar({
  setInputValue,
  inputsValue,
  setSelectValue,
  selectsValue,

  setActiveView,
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
          onChange={(e) => setSelectValue(e.target.value as TRoleFilter)}
        >
          <option value="all">all</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="moderator">moderator</option>
        </select>
      </div>

      <div className="flex gap-2 justify-center mt-2">
        <button
          className="border-2 border-violet-600 text-center px-2 py-1 rounded-xl"
          type="button"
          value="all-users"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setActiveView(e.currentTarget.value as TActiveView)
          }
        >
          all-users
        </button>
        <button
          className="border-2 border-violet-600 text-center px-2 py-1 rounded-xl"
          type="button"
          value="admins"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setActiveView(e.currentTarget.value as TActiveView)
          }
        >
          admins
        </button>
        <button
          className="border-2 border-violet-600 text-center px-2 py-1 rounded-xl"
          type="button"
          value="young"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setActiveView(e.currentTarget.value as TActiveView)
          }
        >
          young
        </button>
      </div>
    </>
  );
}
