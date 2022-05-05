
import { RecomendPost } from '@components/posts';
import { Title } from '@components/ui';


const RecomendWrapper = ({
  recomendPosts = [],
  title = 'Popular Posts'
}) => {

  return (
    <div className='hidden lg:block'>
      <Title title={title} />
      <div className='overflow-x-scroll w-full pt-7 pb-4 px-3 lg:flex scroll-b scrollbar'>
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