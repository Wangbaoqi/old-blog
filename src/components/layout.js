import * as React from "react"

import { Link } from "gatsby"

import { ThemeProvider } from "../themeProvider";

import Header from './header'

const Layout = ({ children }) => {
  


  return (
    <ThemeProvider>
      <header className="shadow-lg fixed top-0 z-50 w-full bg-primary-content text-primary">
        <Header />
      </header>
      <div className="text-primary pt-20 relative font-mono min-h-screen text-base antialiased">
        <main className="max-w-screen-xl mx-auto z-0 overflow-y-auto lg:px-4">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
