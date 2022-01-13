import * as React from "react"

import { Link } from "gatsby"

import { ThemeProvider } from "../themeProvider";

import Aside from '../components/aside'

import Header from "./header";

const Layout = ({ children }) => {
  


  return (
    <ThemeProvider>
      <div className="bg-primary-content text-primary h-screen overflow-hidden relative font-mono text-base antialiased">
        <div className="container mx-auto flex items-start justify-between">
          <aside className="h-screen hidden lg:block md:pt-4 ml-4 shadow-lg relative w-96">
            <Aside />
          </aside>
          <main className="h-screen flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
            <section className="relative overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              {children}
            </section>
          </main>
        </div>
        
      </div>
    </ThemeProvider>
  )
}

export default Layout
