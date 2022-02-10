import * as React from "react"

import { Link } from "gatsby"

import { ThemeProvider } from "../themeProvider";

import Header from './header'

const Layout = ({ children }) => {
  


  return (
    <ThemeProvider>
      <header className="shadow-lg fixed top-0 z-50 h-20 w-full bg-primary-content">
        <Header />
      </header>
      <div className="bg-primary-content text-primary pt-20 relative font-mono min-h-screen text-base antialiased">
        <main className="max-w-screen-xl mx-auto z-0  pt-10 bg-primary-content overflow-y-auto">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
