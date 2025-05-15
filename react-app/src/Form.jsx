import { useState } from 'react';
import SearchButton from './SearchButton';
import formStyles from './Form.module.css';
import btnStyles from './Button.module.css';


export default function Form ({ onSearch, setSearch }) {
  // const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (search.trim()){
    //   onSearch(search);
    onSearch();
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <input className={formStyles.search}
          type="text" 
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a recipe..."
      />
      <SearchButton className={btnStyles.searchBtn}/>
      
    </form>
  );
}