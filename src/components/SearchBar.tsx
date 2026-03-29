import type { TActiveView, TRoleFilter } from "../types/user";

interface ISearchBar {
  query: string;
  roleFilter: TRoleFilter;
  onQueryChange: (value: string) => void;
  onRoleChange: (value: TRoleFilter) => void;
  onViewChange: (value: TActiveView) => void;
}

export function SearchBar({
  query,
  roleFilter,
  onQueryChange,
  onRoleChange,
  onViewChange,
}: ISearchBar) {
  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    onQueryChange(e.target.value);
  }
  function handleRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onRoleChange(e.target.value as TRoleFilter);
  }
  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-2 border-violet-600 text-center"
          type="text"
          value={query}
          placeholder="search by name"
          onChange={handleQueryChange}
        ></input>
      </div>
      <div className="flex justify-center mt-2">
        <select
          className="border-2 border-violet-600 text-center"
          value={roleFilter}
          onChange={handleRoleChange}
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
          onClick={() => onViewChange("all-users")}
        >
          all-users
        </button>
        <button
          className="border-2 border-violet-600 text-center px-2 py-1 rounded-xl"
          type="button"
          value="admins"
          onClick={() => onViewChange("admins")}
        >
          admins
        </button>
        <button
          className="border-2 border-violet-600 text-center px-2 py-1 rounded-xl"
          type="button"
          value="young"
          onClick={() => onViewChange("young")}
        >
          young
        </button>
      </div>
    </>
  );
}
