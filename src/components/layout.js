import * as React from "react"

import { Link } from "gatsby"

import { ThemeProvider } from "../themeProvider";

import Aside from '../components/aside'

import Header from "./header";

const Layout = ({ children }) => {
  


  return (
    <ThemeProvider>
      <div className="bg-primary-content text-primary h-screen overflow-y-scroll relative font-mono text-base antialiased">
        <header className="shadow-lg fixed top-0 z-50 w-full">
          <Aside />
        </header>
        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 z-1 mt-20">
          {/* <Header /> */}
          <section className="relative h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            {children}
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
