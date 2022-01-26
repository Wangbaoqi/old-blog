import React from "react"

import ThemeToggle from "./themeToggle"
import { Link, graphql, useStaticQuery } from "gatsby"
import Search from './search'

const searchIndices = [
  { name: process.env.GATSBY_ALGOLIA_INDEX_NAME, title: process.env.GATSBY_ALGOLIA_INDEX_NAME },
];
const Aside = ({location}) => {


  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author {
            summary
            name
          }
          social {
            twitter
          }
          menuLinks {
            path
            title
          }
        }
      }
    }
  `)


  const { menuLinks = [], social = [], title = '', } = data.site.siteMetadata;


  return ( 
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <section className="flex py-6 ">
        <h1 className="text-xl">{title}</h1>
      </section>
      <section className="flex items-center basis-1/3 justify-between" >
        <nav className="flex">
          {
            menuLinks.map((item, idx) => (
              <div key={idx}>
                <Link
                  to={item.path}
                  activeClassName='active-link'
                  className="w-full font-bold uppercase text-primary flex items-center p-4 my-2 
                    hover:transition-colors hover:duration-200 hover:text-primary-focus"
                >
                  <span className="mx-4 text-sm ">{item.title}</span>
                </Link>
              </div>
            ))
          }
        </nav>
        <div className="tool">
          <ThemeToggle />
          <Search indices={searchIndices} />
        </div>
      </section>
      
    </div>
  )
}

export default Aside
