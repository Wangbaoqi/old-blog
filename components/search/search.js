// import algoliasearch and InstantSearch
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./searchbox";
import Hits from "./hits";
import { useRef, useEffect } from "react";

import {useRouter} from "next/router";

// Initialize the Algolia client
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);


const Search = ({
  onCloseSearch,
}) => {
  const { pathname = '' } = useRouter()

  const ref = useRef(null);

  // useEffect(() => {
  //   onCloseSearch()
  // }, [pathname])
  

  const handleCloseMask = e => {
    if (e.target === ref.current) {
      onCloseSearch()
    }
  }

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-screen w-screen bg-black/50 " onClick={handleCloseMask} ref={ref}>
      <InstantSearch
        searchClient={searchClient} // this is the Algolia client
        indexName="text_blog" // this is your index name
      >        
        <div className=" max-h-screen-50 overflow-hidden mx-auto mt-40 w-2/5 bg-primary-bg rounded-xl z-50">
          <SearchBox />
          <Hits />
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search