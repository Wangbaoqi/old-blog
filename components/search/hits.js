import { connectStateResults } from "react-instantsearch-dom";
import { groupBy } from "@lib/tool/data";
import Link from "next/link";
import { BookOpen, CornerDownLeft, Hash } from "react-feather";

const Hits = (props) => {
  const { searchState, searchResults = {}, goToPost } = props;
  const hits = searchResults?.hits || [];
  const validQuery = searchState.query?.length >= 2; // 3 is the minimum query length

  const groupCategory = groupBy(hits, 'category')
  const groupList = Object.entries(groupCategory)

  return (
    <section className="p-4 border-t border-border-color-5 overflow-y-auto min-h-60 max-h-screen-60">
      {groupList.length === 0 && validQuery && (
        <p className=" text-center py-4">No results found!</p>
      )}
      {
        groupList.length != 0 && validQuery && (
          groupList.map((gp, id) => (
            <div className="my-4" key={id}>
              <h2 className=" pb-4 text-base font-Sriracha ">{gp[0]}</h2>
              <ul className="px-2">
                {
                  gp[1].map((it, idx) => (
                    <li key={idx}>
                      {/* <Link href={`/posts/${it.slug}`}>
                        
                      </Link> */}

                      <div
                          onClick={() => goToPost(it.slug)}
                          className="relative flex justify-start items-center gap-5 h-14 py-2 px-4 mb-4 cursor-pointer bg-second-bg shadow hover:bg-hover-color rounded-md">
                          { it.subCategory == 'everyDay' ? <Hash size={20}/> : <BookOpen size={20} /> }
                          <div className="flex flex-col justify-between flex-1 pr-10">
                            <h3 className=" text-tiny">{it.title}</h3>
                            <p className=" line-clamp-1 text-xs">{it.description}</p>
                          </div>
                          <CornerDownLeft className="absolute top-1/2 right-5 -translate-y-1/2" size={20} />
                        </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        )
      }
    </section>
  );
};

export default connectStateResults(Hits);
