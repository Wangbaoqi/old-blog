import { connectStateResults } from "react-instantsearch-dom";
import { groupBy } from "@lib/tool/data";
import Link from "next/link";
import { BookOpen, CornerDownLeft, Hash } from "react-feather";

const Hits = (props) => {
  const { searchState, searchResults = {} } = props;
  const hits = searchResults?.hits || [];
  const validQuery = searchState.query?.length >= 2; // 3 is the minimum query length

  const groupCategory = groupBy(hits, 'category')
  const groupList = Object.entries(groupCategory)
  console.log(groupList, 'goroupList');


  return (
    <section className="p-4 border-t border-border-color overflow-y-auto h-96">
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No results found!</p>
      )}

      {
        groupList.length && validQuery && (
          groupList.map((gp, id) => (
            <div className="my-4" key={id}>
              <h2 className=" pb-4 text-base font-Sriracha ">{gp[0]}</h2>
              <ul className="px-2">
                {
                  gp[1].map((it, idx) => (
                    <li key={idx}>
                      <Link href={`/posts/${it.slug}`}>
                        <div className=" relative flex justify-start items-center gap-5 h-14 py-2 px-4 mb-4 cursor-pointer bg-slate-700 hover:bg-hover-color rounded-md">
                          { it.subCategory == 'everyDay' ? <Hash size={20}/> : <BookOpen size={20} /> }
                          <div className="flex flex-col justify-between flex-1 pr-10">
                            <h3 className=" text-tiny">{it.title}</h3>
                            <p className=" line-clamp-1 text-xs">{ it.description}</p>
                          </div>
                          <CornerDownLeft className="absolute top-1/2 right-5 -translate-y-1/2" size={20} />
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        )
      }

      {/* {searchResults?.hits.length > 0 && validQuery && (
        <>
          
          {searchResults.hits.map((hit, index) => (
            <div tabIndex={index} key={hit.objectID}>
              <p>{hit.title}</p>
            </div>
          ))}
        </>
      )} */}
    </section>
  );
};

export default connectStateResults(Hits);
