import React , {} from 'react'

// import dayjs from 'dayjs'
import { useStaticQuery, graphql, Link } from "gatsby"


const RecommendArticle = () => {


  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC},
        limit: 10
      ) {
        nodes {
          excerpt
          frontmatter {
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


  const curMonthArticle = data.allMarkdownRemark.nodes || []


  return (
    <section className="home-card">
      <div className="flex items-center mb-4 justify-between">
        <p className="font-bold text-md">
          Recommend Article this month
        </p>
      </div>
      <div className="article-box overflow-x-scroll flex w-full pt-8 pb-1 pl-4">
        {
          curMonthArticle.map((ac) => {
            return (
              <article className='article-card mini-card' key={ac.id}>
                <div className=''>
                  <section className='mb-6'>
                    {
                      (ac.frontmatter.tags || []).map((tag, idx) => (
                        <Link to='/' key={idx}><em>#{tag}</em></Link>
                      ))
                    }
                  </section>
                  <h1 className='mb-6 text-2xl'>
                    <Link to={ac.fields.slug} itemProp="url">{ac.frontmatter.title}</Link>
                  </h1>
                </div>
                
                <span className=''>{ac.frontmatter.date}</span>
                
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default RecommendArticle