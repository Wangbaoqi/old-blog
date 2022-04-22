import { ArrowLeft, ArrowRight } from 'react-feather';
import Link from "next/link";

const NextPost = ({
  prev,
  next,
}) => {


  const leftPost = prev ?
    <Link href={prev.slug}>
      <div className="flex flex-col justify-between">
        <div className='flex items-center mb-4 justify-start cursor-pointer'>
          <ArrowLeft size={20}  />
          <span className='text-sm ml-3'>PREV POST</span>
        </div>
        <h3 className='text-2xl cursor-pointer'>{prev.title}</h3>
        <p className='text-sm font-advent'>{prev.date}</p>
      </div>
    </Link>: null;
  const rightPost = next ?
  <Link href={next.slug}>
    <div className="flex flex-col justify-between">
      <div className='flex items-center mb-4 justify-end cursor-pointer'>
        <span className='text-sm mr-3'>NEXT POST</span>
        <ArrowRight size={20}  />
      </div>
      <h3 className='text-2xl cursor-pointer'>{next.title}</h3>
      <p className='text-sm text-right font-advent'>{next.date}</p>
    </div>
  </Link>: null;

  return (
    <section className="flex justify-between border-t border-t-border-color border-b border-b-border-color py-8 mt-10">
      {leftPost}
      {rightPost}
    </section>
  )
}


export default NextPost