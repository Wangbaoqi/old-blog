import { useDispatch } from 'react-redux'
import { toggleSearch } from "@reducer/searchSlice";
import { Search as SearchIcon } from "react-feather";

import * as Panelbear from '@panelbear/panelbear-js';

const SearchBtn = ({
  showText = false
}) => {
  const dispatch = useDispatch();
  const defaultCls = 'hidden mb-4 sm:flex items-center w-full text-pre text-left text-slate-400 dark:text-slate-300 space-x-3 px-4 h-12 bg-second-bg dark:bg-header-cover focus:outline-none rounded-lg  border border-border-color dark:border-none hover:shadow '
  const iconCls = 'px-1';

  const handleSearchClick = () => {
    dispatch(toggleSearch())
    Panelbear.track('searchPane event')
  }

  return (
    <>
      <button
        onClick={() => handleSearchClick()}
        className={ showText ? defaultCls : iconCls }
      >
        <SearchIcon size={20} />
        {
          showText ? <span className="flex-auto  ">quick search</span> : ""
        }
      </button>
      
    </>
  )
}


export default SearchBtn 