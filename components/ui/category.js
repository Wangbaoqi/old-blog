import Link from 'next/link';
import { ChevronRight } from 'react-feather';
import Image from 'next/image';


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
      <h2 className="text-2xl text-second-color font-Sriracha">Categories</h2>
      {
        cateList.map((cate) => {
          return (
            <Link key={cate.key} href={`/category/${cate.key}`}>
              <div className="relative overflow-hidden rounded-xl bg-second-bg border border-border-color dark:border-0 dark:shadow-3xl mt-5  flex  items-center cursor-pointer">
                <Image
                  className={`object-cover`}
                  src={cate.cover}
                  height='70'
                  width='80'
                  priority
                  alt={cate.key}
                />
                <h5 className=" text-tiny font-Gloria font-medium ml-4">{cate.key}{`(${cate.count})`}</h5>
                <ChevronRight className=' absolute top-1/2 -translate-y-1/2 right-4' size={20}/>
              </div>
            </Link>
            
          )
        })
      }

    </section>
  )
}


export default Category