/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="mb-4 text-right">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const PageHit = function({ hit }) {
  console.log(hit, 'hit');
  return <div className='p-4 text-sm mb-3 rounded-xl bg-primary-content/60'>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
}

const HitsInIndex = function({ index }) {
  return <Index indexName={index.name}>
    <HitCount />
    <Hits className="" hitComponent={PageHit} />
  </Index>
}

const SearchResult = function({ indices, className }) {
  return <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
}

export default SearchResult;
