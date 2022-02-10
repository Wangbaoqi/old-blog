import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  console.log(location)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <section className="overflow-y-auto flex justify-between">
        <article
          className="typo prose tn-typo max-w-4xl"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr />

          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <footer>{/* <Bio /> */}</footer>
        </article>

        <aside className="article-content">
          <section className="article-list">
            <h2 className="font-bold mb-4 w-full px-2">on this page</h2>
            <ul className="text-sm">
              {post.tableOfContents.items.map((im, idx) => {
                console.log(im.url, location)
                return (
                  <li className="px-2 " key={idx}>
                    <Link
                      className="py-1 block rounded-lg hover:text-secondary"
                      to={im.url}
                      href
                      activeClassName="hover:bg-base-content/10"
                    >
                      {im.title}
                    </Link>
                    <ul className="pl-1">
                      {im.items &&
                        im.items.map((it, id) => (
                          <li className="rounded-lg" key={id}>
                            <Link
                              className="block pl-3 py-2 hover:bg-base-content/10 hover:text-secondary"
                              to={it.url}
                              href
                              activeClassName="hover:bg-base-content/10"
                            >
                              {it.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </section>
        </aside>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
