import Link from 'next/link';
import { ArrowRight } from 'react-feather';

const RecentPost = ({
  title,
  slug
}) => {

  return (
    <li className="mb-5">
      <Link href={`/posts/${slug}`}>
        <div className='group flex items-center '>
          <h3 className='group-hover:text-hover-color md:text-tiny text-base dark:text-white cursor-pointer line-clamp-1'> {title}</h3>
          <ArrowRight size={18} className='ml-2 text-second-color'/>
        </div>
      </Link>
    </li>
  )
}


export default RecentPost