import React from "react";

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className="w-full max-w-3xl flex items-center gap-3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search memes..."
        className="flex-1 px-4 py-3 border rounded-lg shadow bg-white"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 py-3 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
