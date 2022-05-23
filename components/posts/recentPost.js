import Link from 'next/link';
import Image from 'next/image';
import { tagTheme } from "@utils/tagtheme";


const RecentPost = ({
  title,
  coverImage,
  date,
  category,
  slug
}) => {

  return (
    <article className="mb-3">
      <div className="relative overflow-hidden rounded-lg">
        <div className='relative h-44 w-full'>
          <Image
            className=' object-cover'
            src={coverImage}
            layout='fill'
            priority
            alt={title}
          />
        </div>
        
        <span className={`text-pre font-Sriracha absolute top-4 left-4 rounded px-2 py-1 ${tagTheme[category]}`}>{category}</span>
      </div>
      <div className="py-3">
        <p className="text-sm py-2">
          <span className="text-xs font-Sriracha">{date}</span>
        </p>
        <Link href={`/posts/${slug}`}>
          <h3 className="font-Sriracha md:text-tiny hover:text-hover-color text-base cursor-pointer">{ title }</h3>
        </Link>
      </div>
    </article>
  )
}


export default RecentPost