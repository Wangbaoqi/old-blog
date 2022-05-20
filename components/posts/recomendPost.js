
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
    <div className="relative overflow-hidden flex flex-col justify-between z-10 basis-60 shrink-0 lg:h-60  p-5 transition rounded-2xl 
      focus-within:rotate-6 hover:-translate-y-4 hover:rotate-6 focus-within:-translate-y-4 shadow-5xl
      -ml-28 first:-ml-0 r-card bg-card-cover first:shadow-4xl bg-second-bg
      "
    >
      <p className='font-Pacifico'>
        <span className={`rounded px-1 py-0 font-Sriracha text-xs mr-2 ${tagTheme[category]}`}>{ category}</span>
        <span className='text-pre font-Sriracha'>{date}</span>
      </p>
      <Link href={`/posts/${slug}`}>
        <h3 className='cursor-pointer my-3 md:text-lg text-tiny font-Sriracha bg-header-color dark:text-transparent bg-clip-text font-semibold'>{ title }</h3>
      </Link>
      <section className='mb-6'>
        <ul className="flex mb-4 lg:mb-0">
          {tags.map((tag, idx) => (
            <li key={idx} className='text-xs'>
              <em>{`#${tag}`}</em>
            </li>
          ))}
        </ul>
      </section>
      
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default RecomendPost