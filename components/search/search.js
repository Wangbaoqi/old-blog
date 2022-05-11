// import algoliasearch and InstantSearch
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./searchbox";
import Hits from "./hits";
import SearchFooter from "./footer";
import { useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch, selectSearch } from "@reducer/searchSlice";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);


const Search = ({
 
}) => {
  const ref = useRef(null);
  const showSearch = useSelector(selectSearch);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(showSearch, 'showSearch');

  useEffect(() => {
  
    if (showSearch) {
      window.document.body.classList.add('overflow-hidden')
    } else {
      window.document.body.classList.remove('overflow-hidden')
    }
    
  }, [showSearch])
  

  const handlePostPage = (slug) => {
    router.push({
      pathname: '/posts/[...slug]',
      query: {
        ...router.query,
        slug: slug.split('/')
      }
    })
    dispatch(toggleSearch())
  }

  const handleCloseMask = e => {
    if (e.target === ref.current) {
      dispatch(toggleSearch())
    }
  }

  if (!showSearch) {
    return ''
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-mask-bg backdrop-blur z-1000 " onClick={handleCloseMask} ref={ref}>
      <InstantSearch
        searchClient={searchClient} // this is the Algolia client
        indexName="text_blog" // this is your index name
      >        
        <div className="overflow-hidden m-5 md:mx-auto md:max-w-47 md:my-32 bg-primary-bg shadow-lg rounded-xl z-50">
          <SearchBox />
          <Hits goToPost={handlePostPage}/>
          <SearchFooter />
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search