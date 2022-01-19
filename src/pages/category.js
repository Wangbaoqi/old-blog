import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Navigate from '../../content/data/category'

const categories = ({ data, location }) => {

  return (
    <Layout >
      <h1>分类</h1>
      <Navigate/>
    </Layout>
  )
}

export default categories

