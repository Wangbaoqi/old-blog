/* eslint-disable react/prop-types */
import React, { createRef, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { ThemeProvider } from 'styled-components';
import StyledSearchBox from './StyledSearchBox';
import StyledSearchResult from './StyledSearchResult';
import StyledSearchRoot from './StyledSearchRoot';
import StylePower from './StylePower';
import useClickOutside from './useClickOutside';


import SearchBox from './SearchBox';
import SearchResult from './SearchResult';


const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};

const Search = function ({ indices }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <ThemeProvider theme={theme}>
      <div ref={rootRef} className="fixed top-32 z-50 left-1/2 right-1/2 overflow-hidden  transform -translate-x-1/2 max-w-3xl w-full bg-secondary-content text-primary rounded-xl">
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          // eslint-disable-next-line no-shadow
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult show={query && query.length > 0 && hasFocus} indices={indices} />
          <StylePower />

        </InstantSearch>
      </div>
    </ThemeProvider>
  );
};

export default Search;
