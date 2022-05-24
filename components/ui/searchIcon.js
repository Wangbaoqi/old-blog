import { useDispatch } from 'react-redux'
import { toggleSearch } from "@reducer/searchSlice";
import { Search as SearchIcon } from "react-feather";


const SearchBtn = ({
  showText = false
}) => {
  const dispatch = useDispatch();
  const defaultCls = 'hidden mb-4 sm:flex items-center w-full text-pre text-left text-slate-400 dark:text-slate-300 space-x-3 px-4 h-12 bg-second-bg focus:outline-none rounded-lg  border border-border-color dark:border-none hover:shadow '
  const iconCls = 'px-1';

  const handleSearchClick = () => {
    dispatch(toggleSearch())
  }

  return (
    <>
      <button
        onClick={() => handleSearchClick()}
        className={`dark:hover:text-white ${showText ? defaultCls : iconCls}`}
      >
        <SearchIcon className='' size={20} />
        {
          showText ? <span className="flex-auto  ">Quick Search</span> : ""
        }
      </button>
      
    </>
  )
}


export default SearchBtn 