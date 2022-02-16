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

  const baseHovCls = `overflow-hidden justify-between cursor-pointer bg-secondary-content rounded-xl shadow-lg`

  const hovCls = isTop ? `md:flex` : 'h-article-height';
  const inwCls = isTop ? `md:w-1/2` : 'md:w-full ';
  const inrCls = isTop ? `p-8` : `py-4 px-4`

  return (
    <article className={`${baseHovCls} ${hovCls}`}>
      <div className={`md:shrink-0 ${inwCls}`}>
        <img
          className="w-full object-cover md:h-full rounded-t-xl"
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
            className="line-clamp-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
            itemProp="description"
          />
        </section>
        <div className="avatar">
          <div className="mr-4 w-12 h-12 mask mask-squircle">
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
