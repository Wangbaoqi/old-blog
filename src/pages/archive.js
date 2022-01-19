import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Archive = () => {
  // const siteTitle = data.site.siteMetadata.title

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: fields___year_month) {
          nodes {
            frontmatter {
              title
              description
              date
            }
          }
          fieldValue
        }
      }
    }
  `)

  const dateList = data.allMarkdownRemark.group
  return (
    <Layout >
      <Seo title="" />
      <h1>Archive</h1>
    </Layout>
  )
}

export default Archive

