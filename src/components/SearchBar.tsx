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
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onQueryChange(e.target.value);
  }
  function handleRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onRoleChange(e.target.value as TRoleFilter);
  }
  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-6">
        <div className="flex justify-center">
          <input
            className="border rounded-lg px-4 py-2 w-full max-w-sm"
            type="text"
            value={query}
            placeholder="search by name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex justify-center mt-2">
          <select
            className="border border-gray-700 rounded-lg px-3 py-2 w-full max-w-sm"
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
            className="border border-gray-700 text-center px-2 py-1 rounded-xl flex gap-2 flex-wrap justify-center"
            type="button"
            value="all-users"
            onClick={() => onViewChange("all-users")}
          >
            all-users
          </button>
          <button
            className="border border-gray-700 text-center px-2 py-1 rounded-xl flex gap-2 flex-wrap justify-center"
            type="button"
            value="admins"
            onClick={() => onViewChange("admins")}
          >
            admins
          </button>
          <button
            className="border border-gray-700 text-center px-2 py-1 rounded-xl flex gap-2 flex-wrap justify-center"
            type="button"
            value="young"
            onClick={() => onViewChange("young")}
          >
            young
          </button>
        </div>
      </div>
    </>
  );
}
