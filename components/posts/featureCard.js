
import Link from 'next/link';
import Image from 'next/image';

import { FeaturePost } from '@components/posts/index'


const FeatureCard = ({
  posts = []
}) => {

  return (
    <section className="container py-10">
      <div className="flex justify-between items-center px-3 md:px-0">
        <h2 className="font-advent text-4xl md:text-6xl ">Featured Topics</h2>
        <Link href='/'>
          <a className='flex items-center text-sm'>
            <span className='mr-3'>VIEW ALL</span>
            {/* <Image
              src={longArrow}
              height={12}
              width={31}
            /> */}
          </a>
        </Link>
      </div>
      <section className="flex flex-col md-flex-row flex-wrap mt-10 px-3 md:px-0">
        <div className='w-full md:w-9/12 md:pr-5' >
          {
            posts.map((post) => (
              <FeaturePost
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))
          }
        </div>
        <div className='w-full md:w-3/12'>
          {
            // <Category />
          }
        </div>
        <div></div>
      </section>
    </section>
  )
}





export default FeatureCard