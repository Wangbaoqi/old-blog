import { Avatar } from '@components/ui';
import Link from 'next/link';
import { ChevronRight } from 'react-feather';

export default function FeaturePost({
  mode,
  title,
  coverImage,
  category,
  date,
  excerpt,
  author = {},
  slug,
}) {
  const postCls = mode == 'col' ? 'md:flex-col' : '';
  const imgHCls = mode == 'col' ? 'md:h-60' : 'md:min-h-f-card';
  const imgWCls = mode == 'col' ? '' : 'md:max-w-f-card';
  const bgCls = 'dark:bg-post-cover';

  const rightContent = (
    <div className='px-4 md:px-8 py-4 relative'>
      <h3 className="md:text-2xl text-xl mb-8 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:text-hover-color">{title}</a>
        </Link>
      </h3>
      <p className="text-sm md:text-tiny leading-loose mt-3 pr-5 line-clamp-3 ">{excerpt}</p>
      <div className="relative text-sm mt-8 pt-8 flex items-center">
        <p className='absolute top-0 left-0 w-2/3 h-px bg-border-color'></p>
        <Avatar name={author.name} picture={author.picture} />
        <span className='text-xs font-Sriracha'>{date}</span>
      </div>
      <div className='absolute flex justify-center items-center right-4 bottom-4 md:right-14 md:bottom-6 md:h-16 h-12 w-12 md:w-16 rounded-full border-border-color border cursor-pointer'>
        <Link href={`/posts/${slug}`}>
          <a>
            <ChevronRight size={20} className=''/>
          </a>
        </Link>
      </div>
    </div>
  )


  const bottomContent = (
    <div className='px-8 relative'>
      <div className='py-4 mt-2 border-b border-b-border-color flex items-center '>
        <Avatar name={author.name} picture={author.picture} />
        <span className='text-xs font-Sriracha h-5 flex items-center'>{date}</span>
      </div>
      <h3 className="md:text-2xl text-xl my-6 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className='my-4'>{ category }</p>
    </div>
  )
  return (
    <div className={`shadow-3xl rounded-2xl  md:min-h-f-card overflow-hidden ${bgCls}`}>
      <div className={`md:flex ${postCls}`}>
        <div className="md:shrink-0">
          <img
            className={`h-48 object-cover w-full ${imgHCls} ${imgWCls}`}
            slug={slug}
            title={title}
            src={coverImage}
          />
        </div>
        { mode == 'col' ? bottomContent : rightContent }
      </div>
    </div>
  )
}
