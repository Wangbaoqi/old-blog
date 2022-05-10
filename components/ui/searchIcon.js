
import { Search as  SearchIcon} from "react-feather"

import { useState,  } from "react";

import Search from "@components/search/search";

const SearchBtn = () => {

  const [showSearch, setShowSearch] = useState(false);

  return (

    <>
      <button
        onClick={() => setShowSearch(true)}
        className="hidden sm:flex items-center w-52 text-left space-x-3 px-4 h-10 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
      >
        <SearchIcon size={16} />
        <span className="flex-auto">search</span>
      </button>

      {
        showSearch ? <Search onCloseSearch={() => setShowSearch(false)}/> : ''
      }
    </>
  )
}


export default SearchBtn 