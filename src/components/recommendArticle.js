import React , {} from 'react'

// import dayjs from 'dayjs'
import { useStaticQuery, graphql, Link } from "gatsby"


const RecommendArticle = () => {


  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC},
        limit: 4
      ) {
        nodes {
          excerpt
          frontmatter {
            category
            cover
            date(formatString: "YYYY-MM-DD")
            description
            tags
            title
          }
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  let a = 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'

  const bgColor = [
    {
      from: `from-orange-400`,
      to: `to-orange-200`,
    },{
      from: `from-cyan-400`,
      to: `to-cyan-200`,
    },{
      from: `from-amber-400`,
      to: `to-orange-400`,
    },{
      from: `from-green-400`,
      to: `to-cyan-400`,
    }
  ]

  const curMonthArticle = data.allMarkdownRemark.nodes || []


  return (
    <section className="home-card">
      <div className="flex items-center mb-4 justify-between">
        <p className="font-bold text-md">
          Recommend Article this month
        </p>
      </div>
      <div className="article-box  overflow-hidden py-8 pl-4">
        <div className='overflow-x-scroll flex w-full'>
          {
            curMonthArticle.map((ac,idx) => {
              return (
                <article className='article-card mini-card' key={idx}>
                  <section className=''>
                    {
                      (ac.frontmatter.tags || []).map(tag => (
                        <Link to='/'>{tag}</Link>
                      ))
                    }
                  </section>
                  <h1>
                    <Link to={ac.fields.slug} itemProp="url">{ac.frontmatter.title}</Link>
                  </h1>
                  <span className=''>{ac.frontmatter.date}</span>
                  
                </article>
              )
            })
          }
        </div>
        
      </div>
    </section>
  )
}

export default RecommendArticle