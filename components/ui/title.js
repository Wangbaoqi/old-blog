
import Link from 'next/link';

const Title = ({
  title = '',
  showAll = false,
  allHref = '/'
}) => {

  return (
    <div className="flex justify-between items-center px-3 py-5 md:px-0">
      <h2 className="font-advent text-4xl md:text-6xl ">{ title }</h2>
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