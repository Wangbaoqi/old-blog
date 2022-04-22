
import Link from 'next/link';

const SplitLayout = ({
  leftTitle,
  leftChild,
  rightChild,
}) => {

  return (
    <section className="container py-10">
      <div className="flex justify-between items-center px-3 md:px-0">
        <h2 className="font-advent text-4xl md:text-6xl ">{ leftTitle }</h2>
        <Link href='/'>
          <a className='flex items-center text-sm'>
            <span className='mr-3'>VIEW ALL</span>
          </a>
        </Link>
      </div>
      <section className="flex flex-col md:flex-row flex-wrap mt-10 px-3 md:px-0">
        <div className='w-full md:w-9/12 md:pr-5' >
          {leftChild}
        </div>
        <div className='w-full md:w-3/12 gap-5'>
          {rightChild}            
        </div>
      </section>
    </section>
  )
}


export default SplitLayout