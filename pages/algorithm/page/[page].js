import { getAlgorithmPost } from "@lib/mdx";
import { useRouter } from "next/router";

import { DayTablePost, Tags, PageNation } from '@components/algorithm';
import { Layout } from '@components/layouts';
import { Input } from '@components/ui';

import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocalStorage, useDebounceValue } from "@hooks/index";

import { POSTS_PAGE_LIST } from '@config/pageList'

const POSTS_PER_PAGE = 10;

let per = 20

const AlgorithmWrapper = ({
  posts = [],
  pagination,
  initPosts = [],
  tagGroup
}) => {
  const router = useRouter();


  const [searchVal, setSearchVal] = useState('');
  const [perPage, setPerPage] = useLocalStorage('perpage', POSTS_PAGE_LIST[0]);


  console.log(searchVal, 'router');

  const inputVal = useDebounceValue(200, searchVal);


  // const [perPage, setPerPage] = useState(POSTS_PAGE_LIST[0]);

  const filterPosts = useMemo(() => {
    return posts.filter(e => inputVal.includes(e.title))
  }, [inputVal]);

  const displayList = searchVal ? filterPosts : initPosts;



  const handlePerPage = (page) => {
    console.log(page);
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
    
  return (
    <Layout type='page'>
      <section className="py-20">
        <Tags tagsList={tagGroup} setTagChange={handleTags} />
        <div>
        <button onClick={() => {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                name: '23'
              }
            })
        }}>
          click
        </button>

          <Input val={searchVal} setInputChange={ handleInput }/>
        </div>
        <DayTablePost dayList={displayList} showTitle={false} />
        <PageNation pagination={pagination} perPage={perPage} setPerPage={setPerPage}/>
      </section>
    </Layout>
  )
}


export default AlgorithmWrapper



// export const getStaticPaths = async (ctx) => {
//   const { everyDay } = await getAlgorithmPost();
//   const totalPages = Math.ceil(everyDay.length / POSTS_PER_PAGE);
//   const paths = Array.from({ length: totalPages }, (_, i) => ({
//     params: { page: (i + 1).toString() },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export async function getServerSideProps(ctx) {
  const { params = {}, query = {} } = ctx;
  console.log(query, 'query context');

  const {
    page,
    searchVal,
    tags,
    pagePer
  } = query
  const { everyDay, tagGroup } = await getAlgorithmPost();
  const pageNumber = parseInt(page)
  const initPosts = everyDay.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(everyDay.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts: everyDay,
      initPosts,
      pagination,
      tagGroup
    },
  }
}

