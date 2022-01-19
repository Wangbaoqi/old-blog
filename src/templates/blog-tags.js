import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import TagsPage from '../pages/tags'

const Tags = ({ pageContext, data }) => {

  const { tag } = pageContext

  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `关于 ${tag} 共有${totalCount} 篇文章`

  return (
    <TagsPage>
      <h1 className="text-2xl text-center my-10">{tagHeader}</h1>
      <div className='grid gap-16 lg:grid-cols-3 xl:grid-cols-3'>
        {
          edges.map(({node}) => (
            <Article key={node.id} data={node}/>
          ))
        }
      </div>
    </TagsPage>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            cover
            date(formatString: "YYYY-MM-DD")
            description
            tags
            title
          }
        }
      }
    }
  }
`