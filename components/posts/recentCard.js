

import { RecentPost } from '@components/posts';

const RecentCard = ({
  posts = []
}) => {

  return (
    <>
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
    </>
  )
}


export default RecentCard