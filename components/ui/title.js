
import Link from 'next/link';

const Title = ({
  title = '',
  showAll = false,
  allHref = '/'
}) => {

  return (
    <div className="flex justify-between items-center px-3 py-8 md:px-0">
      <h1 className="font-Sriracha text-2xl md:text-3xl ">{ title }</h1>
      {
        showAll ? (
          <Link href={allHref}>
            <a className='flex items-center text-sm'>
              <span className='mr-3'>View All</span>
            </a>
          </Link>
        ) : ''
      }
  </div>
  )
}


export default Title