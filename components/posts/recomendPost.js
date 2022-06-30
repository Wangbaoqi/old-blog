
import Link from 'next/link';
import { Avatar } from '@components/ui';
import { tagTheme } from "@utils/tagtheme";


const RecomendPost = ({
  title = '',
  slug = '',
  tags = [],
  category = '',
  coverImage = '',
  date = '',
  author = {},
}) => {


  return (
    <article className="relative overflow-hidden flex flex-col justify-between z-10 basis-52 shrink-0 lg:h-52  p-5 transition rounded-2xl 
      focus-within:rotate-6 hover:-translate-y-4 hover:rotate-6 focus-within:-translate-y-4 shadow-5xl
      -ml-28 first:-ml-0 r-card bg-card-cover first:shadow-4xl bg-second-bg
      "
    >
      <p className='font-Pacifico'>
        <span className={`rounded px-1 py-0 text-xs mr-2 tag-${tagTheme[category]}`}>{ category}</span>
      </p>
      <Link href={`/posts/${slug}`}>
        <h3 className='cursor-pointer my-3 md:text-lg text-tiny bg-header-color dark:text-transparent bg-clip-text'>{ title }</h3>
      </Link>
      <section className='mb-6'>
        {/* <ul className="flex mb-4 lg:mb-0">
          {tags.map((tag, idx) => (
            <li key={idx} className='text-xs'>
              <em>{`#${tag}`}</em>
            </li>
          ))}
        </ul> */}
        <span className='text-pre'>{date}</span>
      </section>
    </article>
  )
}

export default RecomendPost