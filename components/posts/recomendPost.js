
import Link from 'next/link';
import { Avatar } from '@components/ui';


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
    <div className="relative overflow-hidden flex flex-col justify-between z-10 basis-72 shrink-0 h-72 p-8 transition rounded-2xl 
      focus-within:rotate-6 hover:-translate-y-4 hover:rotate-6 focus-within:-translate-y-4 shadow-5xl
      -ml-32 first:-ml-0 r-card bg-card-cover first:shadow-4xl bg-second-bg
      "
    >
      <p className='font-Pacifico'>{date}</p>
      <section className='mb-6'>
        <ul className="flex mb-4 lg:mb-0">
          {tags.map((tag, idx) => (
            <li key={idx} className=''>
              <em>{`#${tag}`}</em>
            </li>
          ))}
        </ul>
      </section>
      <Link href={`/posts/${slug}`}>
        <h1 className='cursor-pointer mb-6 md:text-2xl text-xl hover:text-primary-focus'>{ title }</h1>
      </Link>
      {/* {author ? <Avatar name={author.name} picture={author.picture} /> : ''} */}
    </div>
  )
}

export default RecomendPost