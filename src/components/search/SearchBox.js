import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Search as SearchIcon } from '@styled-icons/fa-solid/Search';

import './SearchBox.css';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (

  <header className='px-5 flex items-center border-b '>
    <form className='flex flex-auto items-center'>
      <SearchIcon className="w-4 h-4 theme-search-icon" />

      <input
        className="focus:outline-none w-full bg-secondary-content h-14 mx-4"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  </header>
  
  
  
  
  
  
  
  
  
  
  
  
));
