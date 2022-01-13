import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({ data, location }) => {

  return (
    <Layout>
      <Seo title="标签" />
      <h1>tag</h1>
    </Layout>
  )
}

export default Tags

