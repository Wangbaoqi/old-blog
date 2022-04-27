
import { ChevronLeft, ChevronRight, Check, ChevronUp, ChevronDown } from 'react-feather';
import { pagenationInit } from '@utils/pagenation'
import { POSTS_PAGE_LIST } from '@config/pageList'

import Link from 'next/link';
import { memo, useState } from 'react';

const PageNation = ({
  pagination,
  
}) => {

  const { currentPage = 1, totalPages } = pagination;

  const [showPage, setShowPage] = useState(false);

  const pageList = pagenationInit(currentPage, totalPages);

  const pageCls = !showPage ? 'hidden' : 'block';


  console.log('pagenation com');


  return (
    
    <section className='flex flex-col md:flex-row justify-between items-center py-10'>

     
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


export default memo(PageNation)