
import { Check, ChevronDown } from 'react-feather';
import { memo, useState, useEffect, useRef } from 'react';


const Select = ({
  initVal,
  optionList,
  setSelect
}) => {
  const [showPage, setShowPage] = useState(false);
  const [value, setValue] = useState(initVal);
  const pageCls = !showPage ? 'hidden' : 'block';
  const sRef = useRef(null)

  useEffect(() => {
    setSelect(value)
  }, [value])

  return (
    <div className="w-24 bg-second-bg rounded-md border  hover:bg-hover-bg border-border-color-5" ref={sRef}>
      <div className="relative  " onClick={() => setShowPage(!showPage)}>
        <button type="button" className="relative pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none sm:text-sm">
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {value}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer " >
            <ChevronDown size={18}/>
          </span>
        </button>
        <div className={`absolute mt-1 w-full z-10 rounded-md bg-second-bg shadow-lg ${pageCls}`}>
          <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {
              optionList.map(page => {
                const cheIconCls = page !== value ? 'hidden' : ''
                return (
                  <li
                    key={page}
                    onClick={() => setValue(page)}
                    className="hover:bg-hover-bg hover:text-hover-color hover:text-primary select-none relative py-2 pl-3 pr-9"
                  >
                      <div className="flex items-center">
                        <span className="ml-3 block font-normal truncate">
                          {page}
                        </span>
                      </div>
                      <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${cheIconCls}`}>
                        <Check size={16} color='var(--fg-secondary)' className='text-second-color'/>
                      </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


export default memo(Select)