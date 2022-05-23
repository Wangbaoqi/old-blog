import { getAlgorithmPost, filterEveryList } from "@lib/mdx";
import { useRouter } from "next/router";

import { DayTablePost, Tags, PageNation } from '@components/algorithm';
import { Layout } from '@components/layouts';
import { Input, PerPage, Select } from '@components/ui';

import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocalStorage, useDebounceValue } from "@hooks/index";


const POSTS_PER_PAGE = 10;


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
    const routerObj = {
      pathname: router.pathname,
      query: {
        ...router.query,
        perPage: perPage
      }
    }
    router.push(routerObj)
  }

  const handleTags = (tags) => {
    const routerObj = {
      pathname: router.pathname,
      query: {
        ...router.query,
        tags: tags.join(',')
      }
    }
    router.push(routerObj)
  }

  const handleInput = (val) => {
    const routerObj = {
      pathname: router.pathname,
      query: {
        ...router.query,
        searchVal: val
      }
    }
    router.push(routerObj)
  }

  const handlePagenation = (page) => {
    const routerObj = {
      pathname: router.pathname,
      query: {
        ...router.query,
        page: page
      }
    }
    router.push(routerObj)
  }

  const handleLevel = () => {

  }
    
  return (
    <Layout type='page' title={'all algorithm posts and leetCode Solved topics'} >
      <section className="py-20 px-3 md:px-0">
        <h1 className=" text-xl mb-10 font-Sriracha bg-header-color dark:bg-clip-text dark:text-transparent">Solved leetCode question</h1>
        <div className="flex items-center font-Sriracha">
          <h3 className="text-second-color text-base mr-4">All: </h3>
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


export async function getServerSideProps(ctx) {
  const { query = {} } = ctx;

  const {
    page,
    searchVal,
    tags='',
    perPage = 20
  } = query
  const { everyDay, tagGroup } = await getAlgorithmPost();
  const pageNumber = parseInt(page);
  const afterTopicList = filterEveryList(everyDay, { searchVal });

  const initPosts = afterTopicList.slice(
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

