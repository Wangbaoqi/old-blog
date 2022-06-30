import { Avatar } from "@components/ui";
import Link from "next/link";
import { tagTheme } from "@utils/tagtheme";
import { Title } from "@components/ui";
import { Star } from "react-feather";

const DayTablePost = ({
  dayList = [],
  showTitle = true
}) => {
  console.log('test');
  return (
    <section className="mt-14">
      { showTitle ? <Title title="Every Day" className='my-20' showAll={true} allHref={`/algorithm/page/1`} /> : '' }
      <div className="container inline-block min-w-full shadow-lg lg:overflow-hidden px-3 md:px-0 ">
        <div className="overflow-x-auto  dark:bg-card-cover rounded-xl">
          <table className="table-auto min-w-full leading-normal ">
            <thead className=" ">
              <tr>
                <th className="px-5 py-5 text-lg text-left">num</th>
                <th className="px-5 py-5 text-lg text-left min-w-t-topic">
                  topic
                </th>
                <th className="px-5 py-5 text-lg text-left">
                  tags
                </th>
                <th className="px-5 py-5 text-lg text-left">
                  level
                </th>
                <th className="px-5 py-5 text-lg text-left">
                  date
                </th>
                <th className="px-5 py-5 text-lg text-left">hot</th>
              </tr>
            </thead>
            <tbody>
              {dayList.map((item) => {
                const levelCls = tagTheme[item.level]
                return (
                  <tr key={item.id} className=' text-sm hover:bg-hover-bg cursor-pointer'>
                    <td className="px-5 py-4 ">{item.id}</td>
                    <td className="px-5 py-4 min-w-t-topic">
                      <Link href={`/posts/${item.slug}`}>
                        <span className="cursor-pointer hover:text-hover-color">
                          {item.title}
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 min-w-t-topic">
                      {item.tags.map((tag, idx) => { 
                        const tagCls = tagTheme[tag]
                        return (
                          <strong key={idx} className={`rounded px-1 py-0.5 text-xs mr-1 tag-${tagCls}`}>
                            {tag}
                          </strong>
                        )
                      })}
                    </td>
                    <td className={`px-5 py-4 font-Sriracha tag-${levelCls}`}>{item.level}</td>
                    <td className="px-5 py-4 ">
                      <span className=" font-Sriracha">{item.date}</span>
                    </td>
                    <td className="px-5 py-4 ">
                      <div className="flex items-center">
                        {Array(item.hot)
                          .fill("")
                          .map((s, idx) => (
                            <Star key={idx} size={16} />
                          ))}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DayTablePost;
