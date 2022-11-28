import { getAlgorithmPost, getAlgorithmEveryByType } from "@lib/mdx";

import { tagTheme, tagAlgo } from "@utils/tagtheme";
import { Layout } from '@components/layouts';

import { invertObject } from "@utils/utils"



const SnippetWrapper = () => {


  return (
    <Layout type='page' title={'all algorithm posts and leetCode Solved topics'} >

      snip
    </Layout>
  )
}

export default SnippetWrapper


export async function getStaticPaths(ctx) {
  const { tagGroup } = await getAlgorithmPost();
  const path = tagGroup.map((tag) => {
    return Array.from({ length: tag.value }, (_, i) => {
      return {
        params: {
          type: tagTheme[tag.key],
          page: (i + 1).toString()
        }
      }
    })
  })
  return {
    paths: path.flat(),
    fallback: false,
  };
}


export const getStaticProps = async (ctx) => {
  const {
    params: { page, type }
  } = ctx;
  const perPage = 20;
  const tagType = invertObject(tagAlgo);
  const everyDay = await getAlgorithmEveryByType(tagType[type]);
  const { tagGroup } = await getAlgorithmPost();

  const pageNumber = parseInt(page);
  const afterTopicList = everyDay.sort((a, b) => a.id - b.id);
  const initPosts = everyDay.slice(
    perPage * (pageNumber - 1),
    perPage * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(afterTopicList.length / perPage),
  }

  return {
    props: {
      allCount: afterTopicList.length,
      posts: afterTopicList,
      initPosts,
      pagination,
      tagGroup
    },
  }
}
