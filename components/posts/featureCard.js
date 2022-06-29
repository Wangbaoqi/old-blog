import { FeaturePost } from '@components/posts';

const FeatureCard = ({
  posts = [],
  ...rest
}) => {
  return (
    <>
      {
        posts.map((post) => (
          <FeaturePost
            key={post.slug}
            {...post}
            {...rest}
          />
        ))
      }
    </>
  )
}
export default FeatureCard