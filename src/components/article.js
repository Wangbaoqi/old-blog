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

  const baseHovCls = `bg-primary-content overflow-hidden drop-shadow-2xl rounded-xl justify-between`

  const hovCls = isTop ? `md:flex h-80` : 'h-article-height';
  const inwCls = isTop ? `md:w-1/2` : 'md:w-full';
  const inrCls = isTop ? `p-8` : `p-4`

  return (
    <article className={`${baseHovCls} ${hovCls}`}>
      <div className={`md:shrink-0 ${inwCls}`}>
        <img
          className="w-full object-cover md:h-full "
          src={frontmatter.cover}
          alt=""
        />
      </div>
      <div className={`${inrCls} ${inwCls} flex flex-col justify-between`}>
        <span>{frontmatter.categories}</span>
        <ul className="flex">
          {(frontmatter.tags || []).map((im, idx) => (
            <li key={idx}>
              <em>{`#${im}`}</em>
            </li>
          ))}
        </ul>
        <h2 className="text-3xl">
          <Link to={fields.slug} itemProp="url">
            {frontmatter.title}
          </Link>
        </h2>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
            itemProp="description"
          />
        </section>
        <p>
          <span>{frontmatter.date}</span>
        </p>
      </div>
    </article>
  )
}

export default Article
