import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Search from "./search"

const Header = () => {
  
  return (
    <div className="w-full shadow-lg bg-secondary-content items-center h-16 rounded-2xl z-40">
      {/* <Seo title="All posts" /> */}
      {/* <Bio /> */}

      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
            <Search/>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Header


