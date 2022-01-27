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
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <section className="flex items-center py-6 ">
        <div className="">
          <h1 className="text-xl">{title}</h1>
        </div>
        {/* <div onClick={() => setShowSearch(true)}>
          search
        </div> */}
      </section>
      <section className="flex items-center basis-1/3 justify-between" >
        <nav className="flex items-center">
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
      <div className={`fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-sm z-10 ${!showSearch ? "hidden" : ''}`} onClick={() => setShowSearch(false)}></div>
      { !showSearch ? '' : <Search indices={searchIndices} />}
    </div>
  )
}

export default Aside
