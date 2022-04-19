
import { Avatar } from '@components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { VscChevronRight } from 'react-icons/vsc'
export default function FeaturePost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='shadow-lg rounded-2xl mb-8 md:min-h-f-card bg-second-bg overflow-hidden'>
      <div className='md:flex'>
        <div className="md:shrink-0">
          <img
            className='h-48 object-cover md:h-f-card  w-full md:max-w-f-card'
            slug={slug}
            title={title}
            src={coverImage}
            // height={350}
            // width={420}
          />
        </div>
        <div className='p-8 relative'>
          <h3 className="text-3xl mb-4 leading-snug">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-base leading-relaxed mt-3 pr-5 line-clamp-3">{excerpt}</p>
          <div className="relative text-sm mt-6 pt-6 flex items-center">
            <p className=' absolute top-0 left-0 w-2/3 h-px bg-border-color'></p>
            <Avatar name={author.name} picture={author.picture} />
            <span>{date}</span>
          </div>
          <div className='absolute flex justify-center items-center right-14 bottom-10 h-16 w-16 rounded-full border-border-color border cursor-pointer'>
            <Link href={`/posts/${slug}`}>
              <VscChevronRight className='text-2xl'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
