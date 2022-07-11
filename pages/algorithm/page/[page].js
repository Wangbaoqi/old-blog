import { getAlgorithmPost } from "@lib/mdx";
import { useRouter } from "next/router";

import { DayTablePost, Tags, PageNation } from '@components/algorithm';
import { Layout } from '@components/layouts';
import { Input, PerPage, Select } from '@components/ui';

import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocalStorage, useDebounceValue } from "@hooks/index";


const POSTS_PER_PAGE = 20;


const AlgorithmWrapper = ({
  allCount,
  posts = [],
  pagination,
  initPosts = [],
  tagGroup
}) => {
  const router = useRouter();

  const { query: { perPage = '', searchVal = '',  } } = router;

  const displayList =  initPosts;
  const handlePerPage = (perPage) => {
    
  }

  const handleTags = (tags) => {
  }

  const handleInput = (val) => {
    
  }

  const handlePagenation = (page) => {
    
  }

  const handleLevel = () => {

  }
    
  return (
    <Layout type='page' title={'all algorithm posts and leetCode Solved topics'} >
      <section className="py-20 px-3 md:px-0">
        <h1 className=" text-xl mb-10 font-Sriracha bg-header-color dark:bg-clip-text dark:text-transparent">Solved leetCode question</h1>
        <div className="flex items-center font-Sriracha">
          <span>{`${allCount} 道题目`}</span>
        </div>
        <Tags tagsList={tagGroup} setTagChange={handleTags} />
        <div className="py-5 flex items-center flex-wrap gap-3">
          <Input initVal={searchVal} setInputChange={handleInput}/>
          <Select initVal='简单' optionList={['简单', '中等', '困难']} setSelect={handleLevel}/>
          <Select initVal='4星' optionList={['3星', '4星', '5星']} setSelect={handleLevel}/>
        </div>
        <div className="-mx-3 md:mx-0">
          <DayTablePost dayList={displayList} showTitle={false} />
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center py-10'>
          <PerPage
            initPer={perPage}
            setPerPageChange={handlePerPage}
          />
          <PageNation
            pagination={pagination}
            setPagenationChange={handlePagenation}
          />
        </div>
      </section>
    </Layout>
  )
}


export default AlgorithmWrapper


export async function getStaticPaths(ctx) {

  const { everyDay, tagGroup } = await getAlgorithmPost();
  const totalPages = Math.ceil(everyDay.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  const path = tagGroup.map((tag) => {
    return Array.from({ length: tag.value }, (_, i) => ({
      params: {
        type: tag.key,
        page: (i + 1).toString()
      }
    }))
  })

  return {
    paths,
    fallback: false,
  }

}


export const getStaticProps = async (ctx) => {
  const {
    params: { page }
  } = ctx;
  const perPage = POSTS_PER_PAGE;
  const { everyDay, tagGroup } = await getAlgorithmPost();
  
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
