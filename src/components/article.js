import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

const Article = ({
  isTop = false,
  data = {}
}) => {

  const {
    excerpt = "",
    frontmatter = {},
    fields = {},
  } = data;

  const baseHovCls = `bg-primary-content overflow-hidden justify-between cursor-pointer`

  const hovCls = isTop ? `md:flex` : 'h-article-height';
  const inwCls = isTop ? `md:w-1/2 lg:h-80 lg:w-80` : 'md:w-full lg:h-80 lg:w-80';
  const inrCls = isTop ? `p-8` : `pt-4`

  return (
    <article className={`${baseHovCls} ${hovCls}`}>
      <div className={`md:shrink-0 ${inwCls}`}>
        <img
          className="w-full object-cover md:h-full rounded-xl"
          src={frontmatter.cover}
          alt=""
        />
      </div>
      <div className={`${inrCls} flex flex-col justify-between`}>
        {/* <span>{frontmatter.categories}</span> */}
        <ul className="flex py-2">
          {(frontmatter.tags || []).map((im, idx) => (
            <li key={idx}>
              <em>{`#${im}`}</em>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl pb-4 hover:text-primary-focus">
          <Link to={fields.slug} itemProp="url">
            {frontmatter.title}
          </Link>
        </h2>
        <section className="pb-4">
          <p
            className="line-clamp-2 text-base"
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
            itemProp="description"
          />
        </section>
        <div className="avatar">
          <div className="mr-6 w-12 h-12 mask mask-squircle">
            <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
          </div>
          <section className="flex flex-col justify-around">
            <span className="text-base">Nate Wang</span>
            <span className="text-xs">{frontmatter.date}</span>
          </section>
        </div> 
      </div>
    </article>
  )
}

export default Article
