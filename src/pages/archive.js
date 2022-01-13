import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Archive = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <Layout >
      <Seo title="" />
      <h1>Archive</h1>
    </Layout>
  )
}

export default Archive

