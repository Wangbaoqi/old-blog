
import { Avatar } from '@components/ui';
import Link from 'next/link';
import Image from 'next/image';

import { ChevronRight } from 'react-feather';

export default function FeaturePost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='shadow-3xl rounded-2xl mb-8 last:mb-0 md:min-h-f-card bg-second-bg overflow-hidden'>
      <div className='md:flex'>
        <div className="md:shrink-0">
          <img
            className='h-48 object-cover md:h-full w-full md:max-w-f-card'
            slug={slug}
            title={title}
            src={coverImage}
            // height={350}
            // width={420}
          />
        </div>
        <div className='px-8 py-5 relative'>
          <h3 className="text-3xl mb-8 leading-snug">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-base leading-relaxed mt-3 pr-5 line-clamp-3">{excerpt}</p>
          <div className="relative text-sm mt-8 pt-8 flex items-center">
            <p className=' absolute top-0 left-0 w-2/3 h-px bg-border-color'></p>
            <Avatar name={author.name} picture={author.picture} />
            <span>{date}</span>
          </div>
          <div className='absolute flex justify-center items-center right-14 bottom-10 h-16 w-16 rounded-full border-border-color border cursor-pointer'>
            <Link href={`/posts/${slug}`}>
              <a>
                <ChevronRight size={20} className=''/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
