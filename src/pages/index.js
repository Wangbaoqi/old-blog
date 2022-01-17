import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopArticle from "../components/topArticle"
import RecommendArticle from "../components/recommendArticle"
import NewestArticle from "../components/newestArticle"

const BlogIndex = () => {
  
  return (
    <Layout >
      {/* <Seo title="All posts" />
      <Bio /> */}

      <TopArticle/>
      <RecommendArticle/>
      <NewestArticle />
    </Layout>
  )
}

export default BlogIndex


