
import { Check, ChevronDown } from 'react-feather';
import { POSTS_PAGE_LIST } from '@config/pageList'
import { memo, useState, useEffect } from 'react';


const PerPage = ({
  initPer,
  setPerPageChange
}) => {
  const initPerPage = initPer || POSTS_PAGE_LIST[0];
  const [showPage, setShowPage] = useState(false);
  const [perPage, setPerPage] = useState(initPerPage);
  const pageCls = !showPage ? 'hidden' : 'block';

  useEffect(() => {
    setPerPageChange(perPage)
  }, [perPage])

  return (
    <div className="w-36 md:mb-0 mb-10">
      <div className="mt-1 relative cursor-pointer" onClick={() => setShowPage(!showPage)}>
        <button type="button" className="relative w-32 bg-second-bg hover:bg-hover-bg rounded-md shadow pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none  sm:text-sm">
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {`${perPage}条/页`}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none " >
            <ChevronDown size={18}/>
          </span>
        </button>
        <div className={`absolute mt-1 w-full z-10 rounded-md bg-second-bg shadow-lg ${pageCls}`}>
          <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {
              POSTS_PAGE_LIST.map(page => {
                const cheIconCls = page !== perPage ? 'hidden' : ''
                return (
                  <li
                    key={page}
                    onClick={() => setPerPage(page)}
                    className=" hover:bg-hover-bg hover:text-primary select-none relative py-2 pl-3 pr-9"
                  >
                      <div className="flex items-center">
                        <span className="ml-3 block font-normal truncate">
                          {`${page}条/页`}
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


export default memo(PerPage)