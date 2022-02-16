import React, { useState } from "react"

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

  const [showSearch, setShowSearch] = useState(false);

  return ( 
    <div className="max-w-screen-xl mx-auto flex h-20 items-center justify-between">
      <section className="flex items-center h-full">
        <div className="flex flex-col justify-start relative z-10 font-medium ob-drop-shadow cursor-pointer">
          <h1 className="text-2xl mr-5">{title}</h1>
          <span className="text-sm">NateWang</span>
        </div>
        <nav className="flex items-center">
          {
            menuLinks.map((item, idx) => (
              <div key={idx}>
                <Link
                  to={item.path}
                  activeClassName='active-link'
                  className="w-full font-bold uppercase flex items-center p-4 my-2 
                    hover:transition-colors hover:duration-200 hover:text-primary-focus"
                >
                  <span className="mx-4 text-sm">{item.title}</span>
                </Link>
              </div>
            ))
          }
        </nav>
      </section>
      <section className="flex items-center basis-1/3 justify-end" >
        {/* <div onClick={() => setShowSearch(true)}>
          search
        </div> */}
        <div className="tool">
          <ThemeToggle />
        </div>
      </section>
    
    </div>
  )
}

export default Aside
