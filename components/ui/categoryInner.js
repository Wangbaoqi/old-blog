import Link from 'next/link';
import { ChevronRight } from 'react-feather';
import Image from 'next/image';
import cn from 'classnames';

const CategoryInner = ({
  groupList
}) => {
  const cateList = []
  for (const item of groupList) {
    const obj = {};
    obj['key'] = item[0];
    obj['count'] = item[1].length;
    cateList.push(obj);
  }
  return (
    <section className="">
      <h2 className="text-2xl px-4 text-anchor-color font-Sriracha">Snippets Collections</h2>
      {
        cateList.map((cate) => {
          const clsIcon = cn('relative rounded-2xl icon', 'h-14 w-14',
            'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-4xl',
            [`icon-${cate.key.toLowerCase()}`])
          return (
            <Link key={cate.key} href={`/snippet/${cate.key}`}>
              <div className="relative overflow-hidden hover:bg-primary-bg-float  py-3 px-4 rounded-xl dark:shadow-3xl mt-5  flex  items-center cursor-pointer">
                <div className={clsIcon}>
                </div>
                <div className='ml-4 flex flex-col h-14 justify-between'>
                  <h3 className="dark:text-white text-tiny">{cate.key}{`(${cate.count})`}</h3>
                  <p>Snippet collection</p>
                </div>
              </div>
            </Link>
          )
        })
      }

    </section>
  )
}


export default CategoryInner