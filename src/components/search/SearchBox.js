import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Search as SearchIcon } from '@styled-icons/fa-solid/Search';

import './SearchBox.css';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (
  <form className={className}>
    <input
      className=""
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={(e) => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
    />
    <SearchIcon className="SearchIcon theme-search-icon" />
  </form>
));
