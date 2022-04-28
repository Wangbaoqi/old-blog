import { getAlgorithmPost } from "@lib/mdx";
import { useRouter } from "next/router";

import { DayTablePost, Tags, PageNation } from '@components/algorithm';
import { Layout } from '@components/layouts';
import { Input, PerPage } from '@components/ui';

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
  console.log('router');


  const displayList =  initPosts;


  const handlePerPage = (perPage) => {
    
    console.log(perPage);
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
    console.log(tags, 'tags');
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
    
  return (
    <Layout type='page'>
      <section className="py-20">
        <div className="flex items-center">
          <h3 className="text-second-color text-base mr-4">All: </h3>
          <span>{`${allCount} 道题目`}</span>
        </div>
        <Tags tagsList={tagGroup} setTagChange={handleTags} />
        <div>
          <Input initVal={searchVal} setInputChange={handleInput}/>
        </div>
        <DayTablePost dayList={displayList} showTitle={false} />

        <div className='flex flex-col md:flex-row justify-between items-center py-10'>
          <PerPage
            initPer={perPage}
            setPerPageChange={handlePerPage}
          />
          {/* <PageNation
            pagination={pagination}
            setPagenationChange={handlePagenation}
          /> */}
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
    perPage
  } = query
  const { everyDay, tagGroup } = await getAlgorithmPost();
  const pageNumber = parseInt(page);
  // const afterTopicList = everyDay || filterEveryList(everyDay, { searchVal, tags });
  const afterTopicList = everyDay;

  console.log(afterTopicList.length, 'afterTopicList');
  const initPosts = afterTopicList.slice(
    perPage * (pageNumber - 1),
    perPage * pageNumber
  )

  // for (const tag of tagGroup) {
  //   for (const ctag of tags.split(',')) {
  //     if (tag.key == ctag) {
  //       tag.check = true;
  //     }
      
  //   }
  // }

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

