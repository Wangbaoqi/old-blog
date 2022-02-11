import React , {} from 'react'

// import dayjs from 'dayjs'
import { useStaticQuery, graphql, Link } from "gatsby"


const RecommendArticle = () => {


  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: {fields: frontmatter___date, order: DESC},
        limit: 10
      ) {
        nodes {
          excerpt
          frontmatter {
            cover
            date(formatString: "YYYY-MM-DD")
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


  const curMonthArticle = data.allMdx.nodes || []


  return (
    <section className="mb-20 overflow-x-scroll w-full py-8 pb-1 -ml-6 px-4 lg:pl-6 lg:pr-0 hidden lg:flex">
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
                <h1 className='mb-6 text-2xl hover:text-primary-focus'>
                  <Link to={ac.fields.slug} itemProp="url">{ac.frontmatter.title}</Link>
                </h1>
              </div>
              <div className="avatar">
                <div className="mr-6 w-12 h-12 mask mask-squircle">
                  <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
                </div>
                <section className="flex flex-col justify-around">
                  <span className="text-base">Nate Wang</span>
                  <span className="text-xs">{ac.frontmatter.date}</span>
                </section>
              </div> 
            </article>
          )
        })
      }
    </section>
  )
}

export default RecommendArticle