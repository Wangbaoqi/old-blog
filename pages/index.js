import Link from "next/link";
import { getFeaturePost, getRecentPost, getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { FeatureWrapper, RecentWrapper, RecomendWrapper } from '@components/posts';
import useSWR from 'swr';
import fetcher from '@lib/fetcher'
import { useEffect } from "react";

export default function BlogList({ featurePosts, categoryGroup, recentPost }) {

  const { data, error } = useSWR('/api/visitor', fetcher)

  

  return (
    <>
      <Layout type='page'>
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