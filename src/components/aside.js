import React from "react"

import ThemeToggle from "./themeToggle"
import { Link, graphql, useStaticQuery } from "gatsby"


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
    <div className="max-w-screen-xl mx-auto h-30 lg:px-12 flex items-center justify-between bg-primary-content">
      <section className="flex py-6 px-4">
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
        </div>
      </section>
      
    </div>
  )
}

export default Aside
