import  { useState } from "react";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the query back to the parent component
  };

  return (
    <div className="flex items-center justify-between w-[95%]">
      <p className="text-4xl font-bold">Items</p>
      <input
        type="search"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="placeholder:text-center h-[30px] rounded-lg w-[300px] pl-3 border-2 border-black outline-none"
      />
    </div>
  );
}
