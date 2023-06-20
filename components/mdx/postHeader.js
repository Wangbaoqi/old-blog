import {Avatar} from '@components/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Clock, Type, ChevronRight, Eye } from 'react-feather';
import { tagTheme } from '@utils/tagtheme';

const PostHeader = ({
  title = '',
  date = '',
  author = {},
  category,
  snippet = '',
  coverImage = '',
  views,
  readTime = {}
}) => {

  let breadcrumbPath = `/category`;
  let breadcrumbSecondPath = `/category/${category}`;
  let breadcrumbTitle = 'Category';
  let breadcrumbTSecondtitle = category ?? snippet;
  if (snippet) {
    breadcrumbSecondPath = `/snippet/${snippet}`;
    breadcrumbTitle = 'Snippet'
  }

  return (
    <header className="">
      <section className='-mt-44 mb-20 z-20'>
        <div className='flex items-center'>
          <Link href='/' >
            <span className='cursor-pointer hover:text-hover-color'>Home</span>
          </Link>
          <ChevronRight size={16} className='mx-3'/>
          <Link href={breadcrumbPath} className='hover:text-hover-color'>
            <span className='cursor-pointer hover:text-hover-color'>{breadcrumbTitle}</span>
          </Link>
          <ChevronRight size={16} className='mx-3'/>
          <Link href={breadcrumbSecondPath} className='hover:text-hover-color'>
            <span className='cursor-pointer hover:text-hover-color'>{breadcrumbTSecondtitle}</span>
          </Link>
        </div>
        <h1 className='my-6 text-xl md:text-3xl font-bold bg-header-color font-Sriracha dark:bg-clip-text dark:text-transparent'>{title}</h1>
        
      </section>
      
      <div className="flex items-center justify-start mb-12 font-Sriracha">
        <div className='flex items-center flex-wrap gap-4'>
          <span className={` rounded px-2 py-1 tag-${tagTheme[category || snippet]}`}>{ category || snippet }</span>
          {/* <span className=''>{date}</span> */}
          <span className='flex items-center'>
            <Clock size={18} />
            <strong className='ml-1'>{readTime.text}</strong>
          </span>
          <span className='flex items-center h-5'>
            <Type size={18} />
            <strong  className='ml-1'>{readTime.words}</strong>
          </span>
          {/* <span className='flex items-center h-5'>
            <Eye size={18} />
            <strong  className='ml-1'>{views}</strong>
          </span> */}
          
          <Avatar {...author} />
        </div>
      </div>
      
      {
        coverImage ? 
          <div className="mt-5 mb-3 rounded-md overflow-hidden">
            <img className="w-full" src={coverImage} alt={title} />
          </div> : ''
      }
      
      
    </header>
  )
}


export default PostHeader;