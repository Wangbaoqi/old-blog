import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {


  return (
    <section className='relative md:py-10 px-3 md:px-0'>
      
      <div className='absolute right-0 bottom-20 z-40 w-3/5'>
        <div className=' mr-auto pr-10  '>
          <h1 className="mb-4 text-xl lg:text-7xl leading-tight ">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h1>
          <div className='p-8 max-w-2xl bg-white rounded-lg self-end mt-10 w-full'>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <Avatar name={author.name} picture={author.picture} />
                <span className='text-nav-color'>
                  <DateFormatter dateString={date} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-0 rounded-2xl z-10 "
        title={title}
        src={coverImage}
        slug={slug}
        height={620}
        width={1280}
      />
     
    </section>
  )
}
