import Link from 'next/link';
import { ArrowRight } from 'react-feather';

export default function FeaturePost({
  lineNum = 3,
  title,
  excerpt,
  slug,
}) {


  let lineCls = 'line-clamp-3';
  switch (lineNum) {
    case 2:
      lineCls = 'line-clamp-2'
      break;
    default:
      break;
  }
  

  return (
    <article className={`cursor-pointer group overflow-hidden`}>
      <Link className='relative flex flex-col justify-between' href={`/posts/${slug}`}>
        <div>
          <h3 className="md:text-xl text-md font-medium leading-snug dark:text-white group-hover:text-second-color">
            {title}
          </h3>
          <p className={`text-sm my-3 leading-8 pr-4 ${lineCls}`}>{excerpt}</p>
          <p className='dark:text-white font-medium flex items-center'>
            <span>Read more</span>
            <ArrowRight size={15} className='ml-2 hidden group-hover:block text-second-color'/>
          </p>
        </div>
      </Link>
    </article>
  )
}
