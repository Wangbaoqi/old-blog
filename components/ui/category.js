import Link from 'next/link';
import { ChevronRight } from 'react-feather';
import { tagTheme } from "@utils/tagtheme";
import cn from 'classnames';

const Category = ({
  groupList
}) => {

  const cateList = []
  for (const key in groupList) {
    const obj = {};
    obj['key'] = key;
    obj['count'] = groupList[key].length;
    obj['cover'] = groupList[key][0]?.coverImage || '';
    cateList.push(obj);
  }

  return (
    <section className="">
      <h2 className="text-xl text-anchor-color">Categories</h2>
      {
        cateList.map((cate) => {
          const clsIcon = cn('relative rounded-xl icon', 'h-12 w-12',
            'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-3xl',
            [`icon-${tagTheme[cate.key].toLowerCase()}`])
          return (
            <Link key={cate.key} href={`/category/${cate.key}`}>
              <div className="relative overflow-hidden rounded-md bg-third-bg  dark:shadow-3xl flex mt-5 p-2 items-center cursor-pointer">
                <div className={clsIcon}></div>
                <h3 className="text-tiny dark:text-white ml-2">{cate.key}{`(${cate.count})`}</h3>
                <ChevronRight className='absolute top-1/2 -translate-y-1/2 right-4' size={20}/>
              </div>
            </Link>
            
          )
        })
      }

    </section>
  )
}


export default Category