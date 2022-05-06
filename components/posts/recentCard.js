

import { RecentPost } from '@components/posts';

const RecentCard = ({
  posts = []
}) => {

  return (
    <>
      {
        posts.map(post => (
          <RecentPost
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            category={post.category}
            slug={post.slug}
          />
        ))
      }
    </>
  )
}


export default RecentCard