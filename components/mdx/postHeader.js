import {Avatar} from '@components/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Clock, Type, ChevronRight, Eye } from 'react-feather';
import { categoryTheme } from '@utils/tagtheme';

const PostHeader = ({
  title = '',
  date = '',
  author = {},
  category = '',
  tags = [],
  coverImage = '',
  views,
  readTime = {}
}) => {


  return (
    <header className="">
      <section className='-mt-44 mb-20 z-20'>
        <div className='flex items-center font-Sriracha'>
          <Link href='/' >
            <span className='cursor-pointer hover:text-hover-color'>Home</span>
          </Link>
          <ChevronRight size={16} className='mx-3'/>
          <Link href='/category' className='hover:text-hover-color'>
            <span className='cursor-pointer hover:text-hover-color'>Category</span>
          </Link>
          <ChevronRight size={16} className='mx-3'/>
          <Link href={ `/category/${category}`} className='hover:text-hover-color'>
            <span className='cursor-pointer hover:text-hover-color'>{category}</span>
          </Link>
        </div>
        <h1 className='my-6 text-xl md:text-3xl font-bold bg-header-color font-Sriracha dark:bg-clip-text dark:text-transparent'>{ title }</h1>
      </section>
      <div className="flex items-center justify-start mb-12 font-Sriracha">
        <div className='flex items-center flex-wrap gap-4'>
          <span className={` rounded px-2 py-1 ${categoryTheme[category]}`}>{ category }</span>
          <span className=''>{date}</span>
          <span className='flex items-center'>
            <Clock size={18} />
            <strong className='ml-1'>{readTime.text}</strong>
          </span>
          <span className='flex items-center h-5'>
            <Type size={18} />
            <strong  className='ml-1'>{readTime.words}</strong>
          </span>
          <span className='flex items-center h-5'>
            <Eye size={18} />
            <strong  className='ml-1'>{views}</strong>
          </span>
          
          <Avatar {...author} />
        </div>
      </div>
      <div className="mt-5 mb-3 rounded-md overflow-hidden">
        <img className="w-full" src={coverImage} alt=""  />
      </div>
      <span className="flex items-center mr-3">
        {
          tags.map((t, id) => (
            <strong key={id}>{t}</strong>
          ))
        }
      </span>
    </header>
  )
}


export default PostHeader;