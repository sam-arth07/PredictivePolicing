import React from 'react';
import "./search.css";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <>
    <div className='search'>
        Crime Search
        
    </div>
    <div className='search_box'>
      <input placeholder='Type Here'>
      </input>
      <button>
      <SearchIcon id='search'/>
      </button>
    </div>
    </>
  )
}

export default Search
