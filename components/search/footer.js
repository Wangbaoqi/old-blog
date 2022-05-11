import { connectSearchBox } from "react-instantsearch-dom";
import { Search } from "react-feather";
import { ReactSVG } from 'react-svg';
import Link from "next/link";

const SearchFooter = ({ refine }) => {


  return (
    <footer className="flex items-center justify-between  h-14 px-4 border-t border-border-color-5">
      <label htmlFor="algolia_search">
      </label>
      <div className=" flex justify-center items-center">
        <span className=" text-xs ">Search by</span>
        <a href='https://www.algolia.com/' target='_blank'>
          <ReactSVG
            className="px-2" src={`/assets/svg/algolia_logo.svg`} />
        </a>
      </div>
    </footer>
  );
};

export default connectSearchBox(SearchFooter);
