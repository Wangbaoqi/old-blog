import { getAlgorithmPost } from "@lib/mdx";

import { DayTablePost, Tags, PageNation } from '@components/algorithm';
import { Layout } from '@components/layouts';

import { useState, useEffect } from "react";

import { POSTS_PAGE_LIST } from '@config/pageList'

const POSTS_PER_PAGE = 10;

let per = 20

const AlgorithmWrapper = ({
  posts = [],
  pagination,
  initPosts = [],
  tagGroup
}) => {

  const [searchVal, setSearchVal] = useState('');

  const [perPage, setPerPage] = useState(POSTS_PAGE_LIST[0]);

  const filterPosts = posts.filter(e => searchVal.includes(e.title));

  const displayList = searchVal ? filterPosts : initPosts;


  useEffect(() => {
    
    
    setTimeout(() => {
      per = 30
    }, 2000)
    return () => {
    }
  }, [])
  

  return (
    <Layout type='page'>
      <section className="py-20">
        <Tags tagsList={tagGroup} />
        <DayTablePost dayList={displayList} showTitle={false}/>
        <PageNation pagination={ pagination }/>
      </section>

    </Layout>
  )
}


export default AlgorithmWrapper



export const getStaticPaths = async () => {


  console.log(per, 'per per');

  const { everyDay } = await getAlgorithmPost();
  const totalPages = Math.ceil(everyDay.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const {
    page
  } = params
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