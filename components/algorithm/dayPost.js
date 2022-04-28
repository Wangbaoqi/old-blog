import { Avatar } from "@components/ui";
import Link from "next/link";
import { colorMap } from '@config/tagTheme'

import { RecomendWrapper, FeatureCard } from "@components/posts";
import { Title } from "@components/ui";

import { Star } from "react-feather";

const DayTablePost = ({
  dayList = [],
  showTitle = true
}) => {
  return (
    <section className="">
      { showTitle ? <Title title="Every Day" className='my-20' showAll={true} allHref={`/algorithm/page/1`} /> : '' }

      <div className="container inline-block min-w-full shadow-3xl  lg:overflow-hidden pt-4 px-3 md:px-0">
        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto min-w-full leading-normal bg-card-cover ">
            <thead>
              <tr>
                <th className="px-5 py-5 font-advent text-lg text-left">num</th>
                <th className="px-5 py-5 font-advent text-lg text-left min-w-t-topic">
                  topic
                </th>
                <th className="px-5 py-5 font-advent text-lg text-left">
                  tags
                </th>
                <th className="px-5 py-5 font-advent text-lg text-left">
                  level
                </th>
                <th className="px-5 py-5 font-advent text-lg text-left">
                  date
                </th>
                <th className="px-5 py-5 font-advent text-lg text-left">hot</th>
                <th className="px-5 py-5 font-advent text-lg text-left">
                  author
                </th>
              </tr>
            </thead>
            <tbody>
              {dayList.map((item) => (
                <tr key={item.id} className=' text-sm'>
                  <td className="px-5 py-4 ">{item.id}</td>
                  <td className="px-5 py-4 min-w-t-topic">
                    <Link href={`/posts/${item.slug}`}>
                      <span className="cursor-pointer hover:text-hover-color">
                        {item.title}
                      </span>
                    </Link>
                  </td>
                  <td className="px-5 py-4 ">
                    {item.tags.map((tag, idx) => (
                      <strong key={idx} className=" text-xs">
                        {colorMap[tag]}
                      </strong>
                    ))}
                  </td>
                  <td className="px-5 py-4 font-Sriracha">{item.level}</td>
                  <td className="px-5 py-4 ">
                    <span className="">{item.date}</span>
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
                  <td className="px-5 py-4">
                    <div>
                      <Avatar {...item.author} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
};

export default DayTablePost;
