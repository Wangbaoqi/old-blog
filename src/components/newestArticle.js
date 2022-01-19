
import React, { } from 'react'

import Article from './article'
import { useStaticQuery, graphql, Link } from "gatsby"


const NewestArticle = () => {

  const list = Array(9).fill(1)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___date},
        limit: 12
      ) {
        nodes {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
            tags
            cover
          }
        }
      }
    }
  `)
  const articleList = data.allMarkdownRemark.nodes;

  return (
    <section className='home-card'>
      <div className='grid gap-24 lg:grid-cols-4 xl:grid-cols-3'>
      {
        articleList.map((item) => (
          <Article key={item.id} data={item}/>
        ))
      }
      </div>
      <div className="flex justify-center mt-10 py-5 rounded-xl shadow-lg cursor-pointer  bg-primary-content">
        查看更多文章...
      </div>
    </section>
    
  )
}

export default NewestArticle