import { useRef } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const inputRef = useRef();

  const focusSearch = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search recipes..."
        className="border p-2 rounded"
      />

      <button
        onClick={focusSearch}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Focus Search
      </button>
    </div>
  );
}

export default SearchBar;