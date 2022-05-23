import React from "react";
import { getGroupByCategory } from "@lib/mdx";
import { Layout } from "@components/layouts";
import { CategoryWrapper } from "@components/posts";

const Category = ({ title, cateGoryList, groupCategory }) => {
  
  return (
    <>
      <Layout type='page' title={`${title} SubCategory on ategory  | Nate Wang blog`}>
        <h1 className="absolute overflow-hidden w-px h-px -m-px">Nate Wang Category { title }</h1>
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
  const categoryGroup = await getGroupByCategory();
  const category = Object.keys(categoryGroup)
  return {
    paths: category.map((post) => {
      return {
        params: {
          cslug: post || '',
        },
      };
    }),
    fallback: false,
  };
};

export default Category;
