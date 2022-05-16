
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Search } from 'react-feather';

import { useDebounceValue } from "@hooks/index";

const Input = ({
  initVal,
  setInputChange
}) => {

  const [searchVal, setSearchVal] = useState(initVal);
  const inputVal = useDebounceValue(300, searchVal);

  useEffect(() => {
    setInputChange(inputVal)
  }, [inputVal])

  const handlePerPage = (val) => {
    setSearchVal(val)
  }
  return (
    <fieldset className=' w-40'>
      <div className="relative ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search size={16}/>
        </span>
        <input
          value={searchVal}
          onChange={e => handlePerPage(e.target.value)}
          type='text'
          placeholder="搜索编号或者标题"
          className="w-auto md:w-52 py-2 pl-10 pr-2 text-sm rounded-md placeholder:text-primary-color  focus:outline-none bg-second-bg hover:bg-hover-bg border border-border-color-5" />
      </div>
    </fieldset>
   
  )
}



export default Input