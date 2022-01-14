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
    <div className="h-full rounded-2xl bg-secondary-content">
      <section className="flex items-center justify-between py-6 px-4">
        <h1>{title}</h1>
        <ThemeToggle />
      </section>
      <nav>

        {
          menuLinks.map((item, idx) => (

            <div key={idx}>
              <Link
                to={item.path}
                activeClassName='active-link'
                className="w-full font-bold uppercase text-primary flex items-center p-4 my-2 
                  hover:transition-colors hover:duration-200 hover:justify-start hover:bg-gradient-to-r hover:from-secondary-content to-primary-content hover:border-r-4 hover:border-secondary hover:text-primary-focus"
                
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm ">{item.title}</span>
              </Link>
            </div>
          ))
        }
        
        
      </nav>
    </div>
  )
}

export default Aside
