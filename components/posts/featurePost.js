import { Avatar, Img } from '@components/ui';
import Link from 'next/link';
import { ChevronRight } from 'react-feather';
import { tagTheme } from "@utils/tagtheme";
import Image from 'next/image';
import { Tags } from '@components/mdx';

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
  const imgHBox = mode == 'col' ? 'h-f-card-c' : 'h-f-card ';
  const imgWBox = mode == 'col' ? 'w-full' : 'md:w-f-card';
  const bgCls = mode == 'col' ? '' : '';

  const rightContent = (
    <div className='px-2 py-6 md:py-4 md:px-8 relative flex flex-col justify-between '>
      <section>
        <h3 className="md:text-lg text-base font-Sriracha leading-snug mb-4 md:mb-7 dark:text-white group-hover:text-second-color">
          <Link href={`/posts/${slug}`}>
            <a className="">{title}</a>
          </Link>
        </h3>
        <p className="my-4 text-sm leading-loose pr-4 line-clamp-3">{excerpt}</p>
      </section>
      <div className="relative text-sm flex items-center">
        <Avatar name={author.name} picture={author.picture} />
        <span className='text-xs font-Sriracha'>{date}</span>
      </div>
      <div className='absolute flex justify-center items-center right-2 bottom-1 md:right-8 md:bottom-1 h-12 w-12 rounded-full border-border-color border cursor-pointer hover:bg-hover-color'>
        <Link href={`/posts/${slug}`}>
          <a>
            <ChevronRight size={20} className=''/>
          </a>
        </Link>
      </div>
    </div>
  )


  const bottomContent = (
    <div className='p-3 relative '>
      <div className='my-4 flex items-center '>
        <Avatar name={author.name} picture={author.picture} />
        <span className='text-xs font-Sriracha h-5 flex items-center'>{date}</span>
      </div>
      <h3 className="md:text-lg text-base my-5 leading-snug dark:text-white group-hover:text-second-color">
        <Link href={`/posts/${slug}`}>
          <a className="font-Sriracha ">{title}</a>
        </Link>
      </h3>
      <p className="text-sm leading-loose pr-2 line-clamp-2 ">{excerpt}</p>
    </div>
  )
  return (
    <article className={`cursor-pointer md:min-h-f-card group overflow-hidden ${bgCls}`}>
      <div className={`md:flex ${postCls}`}>
        <div className="relative md:shrink-0">
          <div className={`relative w-full ${imgHBox} ${imgWBox}`}>
            {/* <Image
              className={`object-cover rounded-xl`}
              src={coverImage}
              layout='fill'
              priority
              alt={title}
            /> */}
          </div>
          <span className={`text-pre font-Sriracha rounded absolute top-4 left-4 px-2 py-1 cursor-pointer ${tagTheme[category]}`}>{ category }</span>
        </div>
        { mode == 'col' ? bottomContent : rightContent }
      </div>
    </article>
  )
}
