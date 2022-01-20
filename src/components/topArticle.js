
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { tagColorEnum } from '../config'

const TopArticle = () => {

  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {}
        sort: {order: DESC, fields: frontmatter___date}
        limit: 1
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          id
          frontmatter {
            date
            title
            tags
          }
        }
      }
    }
  `)

  const articles = data.allMdx.nodes || []

  const getTagCls = (tag) => {
    const tagColor = tagColorEnum[tag] ;

    return `px-2 py-1 text-sm rounded-full ${tagColor} bg-react-b text-react-c`
  } 
  
  return (
    <section className="home-card pt-20 transition duration-500 ease-in-out transform hover:scale-100">
      {
        articles.map((im,idx) => (
          <div key={idx} className="flex flex-col lg:h-80 lg:flex-row">
            <figure className="basis-1/2 pr-10">
              <img src="https://cdn.jsdelivr.net/gh/Wangbaoqi/blogImgs@master/nateImgs/react/react-diff.png" className="rounded-3xl h-full" />
            </figure> 
            <div className="basis-1/2 flex flex-col justify-between">
              <ul className="flex mb-4">
                {(im.frontmatter.tags || []).map((tag, idx) => (
                  <li key={idx} className={getTagCls(tag)}>
                    <em>{`#${tag}`}</em>
                  </li>
                ))}
              </ul>

              <h2 className="mb-4 text-4xl font-medium hover:text-primary-focus">
                <Link to={im.fields.slug} itemProp="url">
                  {im.frontmatter.title}
                </Link>
              </h2> 
              
              <p 
                className="mb-4 line-clamp-4"
                dangerouslySetInnerHTML={{
                  __html: im.frontmatter.description || im.excerpt,
                }}
                itemProp="description"
              />
              <div className="avatar">
                <div className="mr-6 w-12 h-12 mask mask-squircle">
                  <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
                </div>
                <section className="flex flex-col justify-around">
                  <span className="text-base">Nate Wang</span>
                  <span className="text-xs">{im.frontmatter.date}</span>
                </section>
              </div> 
            </div>
          </div>
        ))
      }
    </section>
  )
}


export default TopArticle




