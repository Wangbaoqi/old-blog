import { getFeaturePost, getRecentPost, getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { FeatureWrapper } from '@components/posts';

export default function BlogList({ featurePosts, categoryGroup, recentPost }) {
  return (
    <>
      <Layout type='page' title='Nate Wang blog Home focus on frontEnd and algorithm'>
        <h1 className="absolute overflow-hidden w-px h-px -m-px">Nate Wang Home</h1>
        <FeatureWrapper
          featurePosts={featurePosts}
          recentPosts={recentPost}
          categoryGroup={categoryGroup}
        />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const featurePosts = await getFeaturePost();
  const categoryGroup = await getGroupByCategory('category');
  const recentPost = await getRecentPost();
  return {
    props: { featurePosts, categoryGroup, recentPost },
  };
};