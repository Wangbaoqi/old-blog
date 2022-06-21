import Link from 'next/link';
import cn from 'classnames';

const SnippetCard = ({
  posts = [],
}) => {
  return (
    <ul>
      {
        posts.map((post, idx) => {
          const clsIcon = cn('relative rounded-2xl icon', 'h-14 w-14',
            'before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-4xl',
            [`icon-${post.snippet.toLowerCase()}`])
          return (
            <li key={idx} className='bg-primary-bg-float py-6 px-3 mb-8 rounded-xl'>
              <div className='flex justify-start items-center'>
                <div className={clsIcon}></div>
                <div className='ml-4 h-14 flex flex-col justify-between'>
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className='dark:text-white text-2xl dark:hover:text-second-color cursor-pointer'>{post.title}</h3>
                  </Link>
                  <p className=''>
                    {
                      post.tags.map((tag, id) => (
                        <span key={id} className='mr-3'>{tag}</span>
                      ))
                    }
                  </p>
                </div>
              </div>
              <p className='pt-6'>{post.excerpt}</p>
            </li>
          )
        })
      }
    </ul>
  )
}
export default SnippetCard