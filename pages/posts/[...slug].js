import React, { useEffect } from "react";
import { getAllPosts, getSinglePost } from "@lib/mdx";
import { Layout, Container } from "@components/layouts";
import { MDXRenderer, TableContent } from "@components/mdx";
import { formatSlug } from "@lib/mdx";
import fetcher from "@lib/fetcher";
import useSWR from 'swr'

const Post = ({ post }) => {
  const { slug, toc = [], ...rest } = post;
  const { data = {} } = useSWR(`/api/visitor/${slug}`, fetcher);

  useEffect(() => {
    const registerView = () =>
      fetcher(`/api/visitor/${slug}`, {
        method: 'POST'
      });
    registerView();
  }, [slug]);
  
  return (
    <>
      <Layout type='post' title={`nate wang blog - ${post.frontmatter.title}`} description={post.frontmatter.excerpt}>
        <section className="flex flex-col md:flex-row mt-10 px-3 md:px-0">
          <div className="w-full md:w-9/12 md:px-6">
            <MDXRenderer {...rest} views={data.total}/>
          </div>
          <div className="w-full md:w-3/12 hidden md:block md:pl-20 pt-5">
            {
              <TableContent toc={toc} />
            }
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug.join("/");
  const allPosts = await getAllPosts();
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === slug
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;

  const post = await getSinglePost(slug);

  return {
    props: {
      post: {
        ...post,
        prev,
        next,
        slug,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split("/"),
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
