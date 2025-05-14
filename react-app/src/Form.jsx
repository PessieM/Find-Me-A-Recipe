import { useState } from 'react';
import SearchButton from './SearchButton';

export default function Form ({ onSearch, setSearch }) {
  // const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (search.trim()){
    //   onSearch(search);
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a recipe..."
      />
      <SearchButton />
    </form>
  );
}