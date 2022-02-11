
import React, { } from 'react'

import Article from './article'
import { useStaticQuery, graphql, Link } from "gatsby"


const NewestArticle = () => {

  const list = Array(9).fill(1)

  const data = useStaticQuery(graphql`
    {
      allMdx(
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
            title
            tags
            cover
          }
        }
      }
    }
  `)
  const articleList = data.allMdx.nodes;

  return (
    <div className='grid gap-14 lg:gap-24 lg:grid-cols-4 xl:grid-cols-3 px-4 pt-5 lg:pt-0 lg:px-0'>
      {
        articleList.map((item) => (
          <Article key={item.id} data={item}/>
        ))
      }
      <div className="flex justify-center mt-10 py-5 rounded-xl shadow-lg cursor-pointer ">
        查看更多文章...
      </div>
    </div>
   
    
  )
}

export default NewestArticle