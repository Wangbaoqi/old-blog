import Link from "next/link";
import { getAllPosts } from "@lib/mdx";
import { Layout, Container } from '@components/layouts';
import { FeatureCard } from '@components/posts/index';


export default function BlogList({ posts }) {
  const heroPost = posts[0];
  const featurePosts = posts.slice(1);
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