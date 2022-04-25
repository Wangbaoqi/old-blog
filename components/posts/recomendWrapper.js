
import { RecomendPost } from '@components/posts';

const RecomendWrapper = ({
  recomendPosts = [],
  title = 'Popular Posts'
}) => {

  console.log(recomendPosts, 'recomendPosts');
  return (
    <div className='mt-8'>
      <h2 className="font-advent text-4xl md:text-6xl ">{ title }</h2>
      <div className='overflow-x-scroll w-full py-8 -ml-6 px-4 lg:pl-6 lg:pr-0 hidden lg:flex'>
        {
          recomendPosts.map(post => (
            <RecomendPost
              key={post.slug}
              {...post}
            />
          ))
        }
      </div>
      
    </div>
  )
}


export default RecomendWrapper