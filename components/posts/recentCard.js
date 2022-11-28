
import { RecentPost } from '@components/posts';

const RecentCard = ({
  posts = []
}) => {

  return (
    <div className=''>
      <h2 className="text-xl mt-10 mb-5 text-anchor-color">Featured Topics</h2>
      {
        posts.map(post => (
          <ul key={post.slug}>
            <RecentPost
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              category={post.category}
              slug={post.slug}
            />
          </ul>
        ))
      }
    </div>
  )
}


export default RecentCard