
import { ChevronLeft, ChevronRight, Check, ChevronUp, ChevronDown } from 'react-feather';
import { pagenationInit } from '@utils/pagenation'
import { POSTS_PAGE_LIST } from '@config/pageList'

import Link from 'next/link';
import { useState } from 'react';

const PageNation = ({
  pagination,
  perPage = 20
}) => {

  const { currentPage = 1, totalPages } = pagination;

  const [perList, setPerList] = useState(perPage)

  console.log(totalPages, 'totalPages');

  const pageList = pagenationInit(currentPage, totalPages);


  return (
    
    <section className='flex flex-col md:flex-row justify-between items-center py-10'>
      <div className="w-36 md:mb-0 mb-10">
        <div className="mt-1 relative">
          <button type="button" className="relative w-32 bg-second-bg hover:bg-post-cover rounded-md shadow-lg pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
            <span className="flex items-center">
              <span className="ml-3 block truncate">
              {`${perPage}条/页`}
              </span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={18}/>
            </span>
          </button>
          <div className="absolute mt-1 w-full z-10 rounded-md bg-second-bg shadow-lg">
            <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

              {
                POSTS_PAGE_LIST.map(page => {
                  const cheIconCls = page !== perPage ? 'hidden' : ''

                  return (
                    <li key={page} id="listbox-item-0" role="option" className="cursor-pointer hover:bg-post-cover hover:text-primary select-none relative py-2 pl-3 pr-9">
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

      <div className="flex justify-center space-x-1">
        <button title="previous" type="button" className="inline-flex items-center justify-center hover:bg-post-cover w-10 h-10 py-0 bg-second-bg rounded-md shadow-md">
          <ChevronLeft size={16} />
        </button>
        {
          pageList.map((page, idx) => {
            const aCls = page === currentPage ? 'bg-post-cover' : '';
            if (typeof page !== 'number') {
              return (
                <button
                  disabled
                  key={idx}
                  type="button"
                  className={`inline-flex items-center justify-center w-10 h-10 text-sm font-semibold rounded shadow-md bg-second-bg ${aCls}`}
                >
                  {page}
              </button>
              )
            }
            return (
              <Link href={`/algorithm/page/${page}`} key={page}>
                <button
                  type="button"
                  className={`inline-flex items-center justify-center w-10 h-10 text-sm hover:bg-post-cover  font-semibold rounded shadow-md bg-second-bg ${aCls}`}
                  >
                    {page}
                </button>
              </Link>
            )
          })
        }
        <button title="next" type="button" className="inline-flex items-center justify-center hover:bg-post-cover w-10 h-10 py-0 bg-second-bg rounded-md shadow-md">
          <ChevronRight size={16} />
        </button>
      </div>
    </section>


    
  )
}


export default PageNation