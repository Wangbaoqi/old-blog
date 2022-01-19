import React, { Children } from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql, useStaticQuery } from "gatsby"

import Tags from '../templates/blog-tags'

import Layout from "../components/layout"
import _ from "lodash"

import { tagColorEnum } from '../config'



const TagsPage = ({children}) => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { group },
    // site: {
    //   siteMetadata: { title },
    // },
  } = data;

  const getTagCls = (tag) => {
    const tagColor = tagColorEnum[tag] || '';

    return `py-1 px-2 mr-1 mt-6 rounded ${tagColor}`
  }

  return (
    (
      <Layout>
        {/* <Helmet title={title} /> */}
        <section className="">
          <ul className="inline-flex flex-wrap justify-center w-full">
            {group.map(tag => (
              <li key={tag.fieldValue} className={getTagCls(tag.fieldValue)}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {_.toUpper(tag.fieldValue) } {tag.totalCount}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-10">
            {children}
          </div>
        </section>
       
      </Layout>
    )
  )
}


export default TagsPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `