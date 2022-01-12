import React from "react"

import ThemeToggle from "./themeToggle"

const Aside = () => {

  const list = [
    {
      title: '首页',
      path: '/'
    },{
      title: '归档',
      path: '/'
    },{
      title: '分类',
      path: '/'
    },{
      title: '标签',
      path: '/'
    }
  ]

  return (
    <div className="h-full rounded-2xl bg-secondary-content">
      <section className="flex items-center justify-between py-6 px-4">
        <h1>前端不好玩</h1>
        <ThemeToggle />
      </section>
      <nav>

        {
          list.map((item, idx) => (

            <div key={idx}>
              <a
                class="w-full font-thin uppercase text-secondary flex items-center p-4 my-2 transition-colors duration-200 justify-start 
                        bg-gradient-to-r from-secondary-content to-primary-content border-r-4 border-secondary"
                href="#"
              >
                <span class="text-left">
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
                <span class="mx-4 text-sm font-normal">{item.title}</span>
              </a>
            </div>
          ))
        }
        
        
      </nav>
    </div>
  )
}

export default Aside
