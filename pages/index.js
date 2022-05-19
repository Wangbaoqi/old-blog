import { getFeaturePost, getRecentPost, getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { FeatureWrapper, RecentWrapper, RecomendWrapper } from '@components/posts';

export default function BlogList({ featurePosts, categoryGroup, recentPost }) {
  return (
    <>
      <Layout type='page' title='Nate Wang blog Home'>
        <FeatureWrapper
          featurePosts={featurePosts}
          categoryGroup={categoryGroup}
        />
        <RecomendWrapper
          recomendPosts={recentPost}
        />
        <RecentWrapper
          recentPosts={recentPost}
        />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  // const posts = await getAllPosts();
  const featurePosts = await getFeaturePost();
  const categoryGroup = await getGroupByCategory('category');
  const recentPost = await getRecentPost();
  return {
    props: { featurePosts, categoryGroup, recentPost },
  };
};