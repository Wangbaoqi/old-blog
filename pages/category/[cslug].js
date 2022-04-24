import React from "react";
import { getAllPosts, getGroupByCategory } from "@lib/mdx";
import { Layout } from "@components/layouts";
import { CategoryWrapper } from "@components/posts";

const Category = ({ title, cateGoryList, groupCategory }) => {
  
  return (
    <>
      <Layout type='page'>
        <CategoryWrapper
          title={title}
          categoryPost={cateGoryList}
          groupCategory={groupCategory}
        />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {

  console.log(params, 'params');
  
  const cslug = params.cslug;
  const groupCategory = await getGroupByCategory();
  const cateGoryList = groupCategory[cslug];

  return {
    props: {
      title: cslug,
      groupCategory,
      cateGoryList
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          cslug: post.category,
        },
      };
    }),
    fallback: false,
  };
};

export default Category;
