import { getFeaturePost, getRecentPost, getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { FeatureWrapper, RecentWrapper, RecomendWrapper } from '@components/posts';

export default function BlogList({ featurePosts, categoryGroup, recentPost }) {
  return (
    <>
      <Layout type='page' title='Nate Wang blog Home'>
        <h1 className="absolute overflow-hidden w-px h-px -m-px">Nate Wang blog Home</h1>
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
  const featurePosts = await getFeaturePost();
  const categoryGroup = await getGroupByCategory('category');
  const recentPost = await getRecentPost();
  return {
    props: { featurePosts, categoryGroup, recentPost },
  };
};