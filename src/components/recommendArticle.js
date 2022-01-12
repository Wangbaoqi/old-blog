import React , {} from 'react'

// import dayjs from 'dayjs'
import { useStaticQuery, graphql, Link } from "gatsby"


const RecommendArticle = () => {


  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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


  const curMonthArticle = data.allMarkdownRemark.nodes || []
  console.log(curMonthArticle, 'day');


  return (
    <section className="article-container ">
      <div className="article-header">
        <h2 className='text-3xl font-bold mb-5'>Article Recommend</h2>
        <p className='text-3xl'>this month</p>
      </div>
      <div className="article-box flex pt-20 pb-4 pl-10 w-full overflow-x-auto">
        {
          curMonthArticle.map((ac) => (
            <article className="article-card" key={ac.id}>
              {/* <img src={ac.frontmatter.cover} className='absolute top-0 left-0 w-80 h-80 rounded-2xl -z-10' alt="" /> */}
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
          ))
        }
      </div>
    </section>
  )
}

export default RecommendArticle