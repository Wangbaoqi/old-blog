import React from "react";
import { getAllPosts, getSinglePost } from "@lib/mdx";
import { Layout, Container } from "@components/layouts";
import { MDXRenderer, TableContent } from "@components/mdx";
import { formatSlug } from "@lib/mdx";

const Post = ({ post }) => {
  const { toc = [], ...rest } = post
  return (
    <>
      <Layout>
        <section className="flex flex-col md:flex-row mt-10 px-3 md:px-0">
          <div className="w-full md:w-9/12 md:pr-5">
            <MDXRenderer {...rest} />
          </div>
          <div className="w-full md:w-3/12 hidden md:block md:px-3">
            {
              // <Category />
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
