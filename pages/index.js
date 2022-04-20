import Link from "next/link";
import { getAllPosts } from "@lib/mdx";
import { Layout, Container } from '@components/layouts';
import { FeatureCard } from '@components/posts/index';


export default function BlogList({ posts }) {
  return (
    <>
      <Layout type='page'>
        <Container>
          <FeatureCard posts={ posts }/>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};