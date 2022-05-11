import { connectSearchBox } from "react-instantsearch-dom";
import { Search } from "react-feather";

const SearchBox = ({ refine }) => {


  return (
    <header className="flex items-center h-14 px-4">
      <label htmlFor="algolia_search">
        <Search size={20}/>
      </label>
      <input
        autoComplete="off"
        id="algolia_search"
        type="search"
        className="h-14 flex-1 outline-none px-4 bg-transparent "
        placeholder="Search for posts"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </header>
  );
};

export default connectSearchBox(SearchBox);
