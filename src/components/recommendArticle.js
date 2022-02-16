import React , {} from 'react'

// import dayjs from 'dayjs'
import { useStaticQuery, graphql, Link } from "gatsby"

import { tagColorEnum } from '../config/tag/config'

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
            categories
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

  const getTagCls = (tag) => {
    return `px-2 py-1 text-sm font-semibold rounded-md`
  }

  return (
    <section className="mb-20 overflow-x-scroll w-full py-8 pb-1 -ml-6 px-4 lg:pl-6 lg:pr-0 hidden lg:flex">
      {
        curMonthArticle.map((ac) => {

          const tagObj = tagColorEnum[ac.frontmatter.categories.toLowerCase()]

          const cardBg = `bg-gradient-to-r from-[#087ea4] to-primary-content`
          return (
            <article className={`article-card  ${cardBg} `} key={ac.id}>
              <div className=''>
                <section className='mb-6'>
                  <ul className="flex mb-4 lg:mb-0">
                    {(ac.frontmatter.tags || []).map((tag, idx) => (
                      <li key={idx} className={getTagCls(tag)}>
                        <em>{`#${tag}`}</em>
                      </li>
                    ))}
                  </ul>
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