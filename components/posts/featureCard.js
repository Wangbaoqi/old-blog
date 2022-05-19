import { FeaturePost } from '@components/posts';

const FeatureCard = ({
  posts = [],
  mode = 'row'
}) => {
  return (
    <>
      {
        posts.map((post) => (
          <FeaturePost
            key={post.slug}
            mode={mode}
            {...post}
          />
        ))
      }
    </>
  )
}
export default FeatureCard