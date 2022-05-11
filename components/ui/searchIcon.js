import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch, selectSearch } from "@reducer/searchSlice";
import Search from "@components/search/search";
import { Search as SearchIcon } from "react-feather";
import { useRouter } from 'next/router';
import { useEffect } from 'react';




const SearchBtn = ({
  showText = false
}) => {
  const dispatch = useDispatch();
  // const showSearch = useSelector(selectSearch);
  // const router = useRouter();

  // console.log(router);
  // const handleShowSearch = () => {
  //   dispatch(toggleSearch())
  //   if (!showSearch) {
  //     window.document.body.classList.add('overflow-hidden')
  //   } else {
  //     window.document.body.classList.remove('overflow-hidden')
  //   }
  // }

  // const handlePostPage = (slug) => {
  //   router.push({
  //     pathname: '/posts/[...slug]',
  //     query: {
  //       ...router.query,
  //       slug: slug.split('/')
  //     }
  //   })
  //   handleShowSearch()
  // }

  const defaultCls = 'hidden mb-4 sm:flex items-center w-full text-pre text-left text-slate-400 dark:text-slate-300 space-x-3 px-4 h-12 bg-second-bg dark:bg-header-cover focus:outline-none rounded-lg  border border-border-color dark:border-none hover:shadow '
  const iconCls = 'px-1'

  return (
    <>
      <button
        onClick={() => dispatch(toggleSearch())}
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