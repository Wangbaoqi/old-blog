import Link from "next/link";
import { getFeaturePost, getGroupByCategory } from "@lib/mdx";
import { Layout, Container, SplitLayout } from '@components/layouts';
import { FeatureCard } from '@components/posts/index';
import { PersonCard, Category } from '@components/ui'


export default function BlogList({ featurePosts, categoryGroup }) {

  const leftChild = (
    <>
      <FeatureCard posts={ featurePosts }/>
    </>
  )

  const rightChild = (
    <>
      <PersonCard />
      <Category groupList={categoryGroup}/>
    </>
  )
  return (
    <>
      <Layout type='page'>
        <Container>
          <SplitLayout
            leftTitle='Featured Topics'
            leftChild={leftChild}
            rightChild={rightChild}
          />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  // const posts = await getAllPosts();
  const featurePosts = await getFeaturePost();
  const categoryGroup = await getGroupByCategory('category')
  return {
    props: { featurePosts, categoryGroup },
  };
};