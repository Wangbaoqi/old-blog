import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-2xl mb-8 md:min-h-f-card'>
      <div className="relative block h-56 md:h-full">
        <CoverImage
          className='rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none'
          slug={slug}
          title={title}
          src={coverImage}
          height={350}
          width={420}
        />
      </div>
      
      <div className='p-6 '>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      
    </div>
  )
}
