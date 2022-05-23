import { getFeaturePost, getRecentPost, getGroupByCategory, getAlgorithmEvery } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { FeatureWrapper, RecentWrapper, RecomendWrapper } from '@components/posts';
import { DayTablePost } from "@components/algorithm";

export default function BlogList({ featurePosts, categoryGroup, recentPost, everyList }) {
  return (
    <>
      <Layout type='page' title='Nate Wang blog Home focus on frontEnd and algorithm'>
        <h1 className="absolute overflow-hidden w-px h-px -m-px">Nate Wang Home</h1>
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
        <DayTablePost dayList={everyList}/>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const featurePosts = await getFeaturePost();
  const categoryGroup = await getGroupByCategory('category');
  const recentPost = await getRecentPost();
  const everyList = await getAlgorithmEvery();
  return {
    props: { featurePosts, categoryGroup, recentPost, everyList },
  };
};