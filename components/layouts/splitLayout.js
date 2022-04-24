
import Link from 'next/link';

const SplitLayout = ({
  mode='left',
  leftTitle,
  leftChild,
  rightChild,
}) => {

  const leftCls = `w-full ${mode === 'left' ? 'lg:w-9/12 md:' : 'lg:w-3/12'}`
  const rightCls = `w-full ${mode === 'left' ? 'lg:w-3/12' : 'lg:w-9/12'}`


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
      <section className="flex flex-col lg:flex-row gap-10 mt-10 px-3 md:px-0">
        <div className={leftCls}>
          {leftChild}
        </div>
        <div className={rightCls}>
          {rightChild}            
        </div>
      </section>
    </section>
  )
}


export default SplitLayout