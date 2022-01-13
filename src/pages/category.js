import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Category = ({ data, location }) => {

  return (
    <Layout >
      <Seo title="404: Not Found" />
      <h1>分类</h1>
    </Layout>
  )
}

export default Category

