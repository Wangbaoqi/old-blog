
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Search } from 'react-feather';

import { useDebounceValue } from "@hooks/index";

const Input = ({
  val,
  setInputChange
}) => {

  const [searchVal, setSearchVal] = useState('');
  const inputVal = useDebounceValue(1000, searchVal);

  useEffect(() => {
    setInputChange(inputVal)
  }, [inputVal])

  const handlePerPage = (val) => {
    setSearchVal(val)
  }
  return (
    <>
      <fieldset className="w-full my-5 ">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" title="search" className="p-1">
              <Search size={16}/>
            </button>
          </span>
          <input
            value={searchVal}
            onChange={e => handlePerPage(e.target.value)}
            type='text'
            placeholder="搜索编号或者标题"
            className="w-auto md:w-52 py-2 pl-10 pr-2 text-sm rounded-md placeholder:text-primary-color  focus:outline-none bg-second-bg bg-post-cover" />
        </div>
      </fieldset>
    </>
   
  )
}



export default Input